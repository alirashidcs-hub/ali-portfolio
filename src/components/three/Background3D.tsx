import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')

    const update = () => {
      setIsMobile(mediaQuery.matches)
    }

    update()
    mediaQuery.addEventListener('change', update)

    return () => {
      mediaQuery.removeEventListener('change', update)
    }
  }, [])

  return isMobile
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

    return {
      positions,
      velocities,
    }
  }, [count])

  const linePositions = useMemo(
    () => new Float32Array(count * count * 3),
    [count],
  )

  useFrame((state) => {
    const points = pointsRef.current

    if (!points) return

    const positionAttribute = points.geometry.attributes
      .position as THREE.BufferAttribute

    const positionsArray = positionAttribute.array as Float32Array

    mouse.current.x = state.pointer.x
    mouse.current.y = state.pointer.y

    // Move particles
    for (let i = 0; i < count; i++) {
      const index = i * 3

      positionsArray[index] += velocities[i].x
      positionsArray[index + 1] += velocities[i].y
      positionsArray[index + 2] += velocities[i].z

      if (Math.abs(positionsArray[index]) > 8) {
        velocities[i].x *= -1
      }

      if (Math.abs(positionsArray[index + 1]) > 5) {
        velocities[i].y *= -1
      }

      if (Math.abs(positionsArray[index + 2]) > 3.5) {
        velocities[i].z *= -1
      }
    }

    positionAttribute.needsUpdate = true

    // Build nearby connections
    let vertexIndex = 0
    let connectedPairs = 0

    const maxDistance = 2.3
    const maxDistanceSquared = maxDistance * maxDistance

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      for (let j = i + 1; j < count; j++) {
        const j3 = j * 3

        const dx =
          positionsArray[i3] -
          positionsArray[j3]

        const dy =
          positionsArray[i3 + 1] -
          positionsArray[j3 + 1]

        const dz =
          positionsArray[i3 + 2] -
          positionsArray[j3 + 2]

        const distanceSquared =
          dx * dx +
          dy * dy +
          dz * dz

        if (distanceSquared < maxDistanceSquared) {
          linePositions[vertexIndex++] = positionsArray[i3]
          linePositions[vertexIndex++] = positionsArray[i3 + 1]
          linePositions[vertexIndex++] = positionsArray[i3 + 2]

          linePositions[vertexIndex++] = positionsArray[j3]
          linePositions[vertexIndex++] = positionsArray[j3 + 1]
          linePositions[vertexIndex++] = positionsArray[j3 + 2]

          connectedPairs++
        }
      }
    }

    const lines = linesRef.current

    if (lines) {
      const lineGeometry = lines.geometry

      lineGeometry.setDrawRange(
        0,
        connectedPairs * 2,
      )

      const lineAttribute =
        lineGeometry.attributes.position as THREE.BufferAttribute

      lineAttribute.array.set(
        linePositions.subarray(0, vertexIndex),
      )

      lineAttribute.needsUpdate = true
    }

    // Subtle mouse interaction
    points.rotation.y += 0.0005

    points.rotation.x = THREE.MathUtils.lerp(
      points.rotation.x,
      mouse.current.y * 0.1,
      0.02,
    )

    points.rotation.y = THREE.MathUtils.lerp(
      points.rotation.y,
      points.rotation.y + mouse.current.x * 0.06,
      0.02,
    )

    if (lines) {
      lines.rotation.copy(points.rotation)
    }
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#38BDF8"
          size={0.055}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color="#8B5CF6"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </group>
  )
}

export default function Background3D() {
  const isMobile = useIsMobile()

  const count = isMobile ? 42 : 90

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 9],
          fov: 50,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={0.6} />
        <Nodes count={count} />
      </Canvas>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,23,42,0.2),_#050816_75%)]" />
    </div>
  )
}