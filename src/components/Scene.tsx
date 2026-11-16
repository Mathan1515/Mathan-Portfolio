import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html, OrbitControls, Sparkles, RoundedBox } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';
function Laptop() {
    const rig = useRef<THREE.Group>(null);
    const { pointer } = useThree();
    const keys = useMemo(() => Array.from({ length: 56 }, (_, i) => ({
        x: ((i % 14) - 6.5) * 0.142,
        z: (Math.floor(i / 14) - 1.5) * 0.143,
    })), []);
    useFrame((state, delta) => {
        if (!rig.current)
            return;
        rig.current.rotation.y = THREE.MathUtils.damp(rig.current.rotation.y, -0.2 + pointer.x * 0.18, 2, delta);
        rig.current.rotation.x = THREE.MathUtils.damp(rig.current.rotation.x, 0.07 + pointer.y * 0.07, 2, delta);
        rig.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    });
    return (<group ref={rig} rotation={[0, -0.2, 0]} position={[0, -0.12, 0]}>
        <group position={[0, -0.56, 0.48]}>
          <RoundedBox args={[2.6, 0.11, 1.8]} radius={0.09} smoothness={4}>
            <meshStandardMaterial color="#242d43" metalness={0.8} roughness={0.32}/>
          </RoundedBox>
          {keys.map((key, i) => <mesh key={i} position={[key.x, 0.064, key.z - 0.02]}>
          <boxGeometry args={[0.105, 0.008, 0.085]}/>
          <meshStandardMaterial color={i % 17 === 0 ? '#24b7cb' : '#40516b'} emissive={i % 17 === 0 ? '#086e82' : '#101827'} emissiveIntensity={0.5}/>
        </mesh>)}
          <mesh position={[0, 0.062, 0.6]}>
            <boxGeometry args={[0.75, 0.008, 0.36]}/>
            <meshStandardMaterial color="#172033" metalness={0.6} roughness={0.4}/>
          </mesh>
        </group>
        <group position={[0, 0.34, -0.4]} rotation={[-0.16, 0, 0]}>
          <RoundedBox args={[2.65, 1.8, 0.12]} radius={0.09} smoothness={4}>
            <meshStandardMaterial color="#2c3854" metalness={0.78} roughness={0.28}/>
          </RoundedBox>
          <mesh position={[0, 0, 0.068]}>
            <planeGeometry args={[2.47, 1.62]}/>
            <meshBasicMaterial color="#071320"/>
          </mesh>
          <Html transform distanceFactor={1.49} position={[0, 0, 0.073]} style={{ pointerEvents: 'none' }}>
            <div className="laptop-screen">
              <div className="laptop-screen-top">
                <i />
                <i />
                <i />
                <span>
                  developer.tsx
                </span>
                <b>
                  ⌘
                </b>
              </div>
              <div className="screen-code">
                <span className="screen-line">
                  01&nbsp;&nbsp;
                  <em>
                    const
                  </em>
                  <strong>
                    developer
                  </strong>
                  =
                  {'{'}
                </span>
                <span className="screen-line">
                  02&nbsp;&nbsp;&nbsp;&nbsp;name:
                  <q>
                    'Mathan Raja'
                  </q>
                  ,
                </span>
                <span className="screen-line">
                  03&nbsp;&nbsp;&nbsp;&nbsp;role:
                  <q>
                    'Full Stack'
                  </q>
                  ,
                </span>
                <span className="screen-line">
                  04&nbsp;&nbsp;&nbsp;&nbsp;skills: [
                </span>
                <span className="screen-line">
                  05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <q>
                    'React'
                  </q>
                  ,
                  <q>
                    'Node'
                  </q>
                  ,
                </span>
                <span className="screen-line">
                  06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <q>
                    'Cloud'
                  </q>
                </span>
                <span className="screen-line">
                  07&nbsp;&nbsp;&nbsp;&nbsp;],
                </span>
                <span className="screen-line">
                  08&nbsp;&nbsp;&nbsp;&nbsp;passion:
                  <em>
                    true
                  </em>
                </span>
                <span className="screen-line">
                  09&nbsp;&nbsp;
                  {'}'}
                  ;
                </span>
                <span className="screen-line screen-cursor">
                  10&nbsp;&nbsp;▍
                </span>
              </div>
              <div className="screen-status">
                <span>
                  ●
                </span>
                All systems operational
                <span>
                  TypeScript
                </span>
              </div>
            </div>
          </Html>
        </group>
        <mesh position={[0, -0.63, 0.45]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3, 2]}/>
          <meshBasicMaterial color="#4f46e5" transparent opacity={0.09} depthWrite={false}/>
        </mesh>
      </group>);
}
function Satellites() {
    const group = useRef<THREE.Group>(null);
    useFrame((_state, delta) => { if (group.current)
        group.current.rotation.y += delta * 0.12; });
    return <group ref={group}>
        <Float speed={1.7} rotationIntensity={0.5} floatIntensity={0.7}>
          <mesh position={[-2.05, 1.08, 0.25]} rotation={[0.5, 0.4, 0.2]}>
            <octahedronGeometry args={[0.29]}/>
            <meshStandardMaterial color="#13d5e8" emissive="#11aabb" emissiveIntensity={0.4} metalness={0.7} roughness={0.2} wireframe/>
          </mesh>
        </Float>
        <Float speed={1.4} floatIntensity={0.75}>
          <mesh position={[2.05, 1.05, -0.1]} rotation={[0.3, 0, 0.4]}>
            <torusGeometry args={[0.28, 0.065, 12, 40]}/>
            <meshStandardMaterial color="#b298ff" emissive="#533cba" emissiveIntensity={0.7} metalness={0.6}/>
          </mesh>
        </Float>
        <Float speed={2} floatIntensity={0.5}>
          <mesh position={[1.9, -1.13, 0.2]}>
            <icosahedronGeometry args={[0.17]}/>
            <meshStandardMaterial color="#64edee" metalness={0.8} roughness={0.2}/>
          </mesh>
        </Float>
        <mesh rotation={[Math.PI / 2.7, 0.15, 0]}>
          <torusGeometry args={[2.75, 0.007, 3, 100]}/>
          <meshBasicMaterial color="#287cbe" transparent opacity={0.32}/>
        </mesh>
      </group>;
}
export default function Scene() {
    return <Canvas dpr={[1, 1.6]} camera={{ position: [0, 1.2, 5.5], fov: 42 }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }} fallback={<div className="scene-fallback">&lt; creative engineering /&gt;</div>}>
        <ambientLight intensity={1.35}/>
        <pointLight position={[-3, 4, 4]} color="#5cecff" intensity={22} distance={12}/>
        <pointLight position={[3, 0, 2]} color="#895aff" intensity={16} distance={10}/>
        <spotLight position={[0, 5, 2]} intensity={28} angle={0.6} penumbra={1} color="#c7eaff"/>
        <Suspense fallback={null}>
          <Laptop />
          <Satellites />
          <Sparkles count={55} scale={[8, 5.5, 4]} size={1.6} speed={0.35} color="#77c6ff"/>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}/>
      </Canvas>;
}
