import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function useIsMobile() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setMobile(mq.matches)
    const onChange = () => setMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return mobile
}

function Nodes({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const mouse = useRef({ x: 0, y: 0 })

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities: THREE.Vector3[] = []
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 7
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004,
        ),
      )
    }
    return { positions, velocities }
  }, [count])

  const linePositions = useMemo(() => new Float32Array(count * count * 3), [count])

  useFrame((state) => {
    const geo = pointsRef.current?.geometry
    if (!geo) return
    const posAttr = geo.attributes.position as THREE.BufferAttribute
    const arr = posAttr.array as Float32Array

    mouse.current.x = state.pointer.x
    mouse.current.y = state.pointer.y

    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i].x
      arr[i * 3 + 1] += velocities[i].y
      arr[i * 3 + 2] += velocities[i].z

      if (Math.abs(arr[i * 3]) > 8) velocities[i].x *= -1
      if (Math.abs(arr[i * 3 + 1]) > 5) velocities[i].y *= -1
      if (Math.abs(arr[i * 3 + 2]) > 3.5) velocities[i].z *= -1
    }
    posAttr.needsUpdate = true

    let vertexpos = 0
    let numConnected = 0
    const maxDist = 2.3
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = arr[i * 3] - arr[j * 3]
        const dy = arr[i * 3 + 1] - arr[j * 3 + 1]
        const dz = arr[i * 3 + 2] - arr[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < maxDist) {
          linePositions[vertexpos++] = arr[i * 3]
          linePositions[vertexpos++] = arr[i * 3 + 1]
          linePositions[vertexpos++] = arr[i * 3 + 2]
          linePositions[vertexpos++] = arr[j * 3]
          linePositions[vertexpos++] = arr[j * 3 + 1]
          linePositions[vertexpos++] = arr[j * 3 + 2]
          numConnected++
        }
      }
    }
    const lineGeo = linesRef.current?.geometry
    if (lineGeo) {
      lineGeo.setDrawRange(0, numConnected * 2)
      const lineAttr = lineGeo.attributes.position as THREE.BufferAttribute
      lineAttr.array.set(linePositions.subarray(0, vertexpos))
      lineAttr.needsUpdate = true
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        mouse.current.y * 0.1,
        0.02,
      )
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(
        pointsRef.current.rotation.y,
        pointsRef.current.rotation.y + mouse.current.x * 0.06,
        0.02,
      )
    }
    if (linesRef.current) {
      linesRef.current.rotation.copy(pointsRef.current!.rotation)
    }
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#38BDF8" size={0.055} sizeAttenuation transparent opacity={0.85} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#8B5CF6" transparent opacity={0.15} />
      </lineSegments>
    </group>
  )
}

export default function Background3D() {
  const isMobile = useIsMobile()
  const count = isMobile ? 42 : 90

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <Nodes count={count} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,23,42,0.2),_#050816_75%)]" />
    </div>
  )
}
