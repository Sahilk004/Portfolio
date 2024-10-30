import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { easing } from "maath"

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        // Smoothly update the camera position
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

        // Apply pointer-based rotation only if not mobile and groupRef is available
        if (!isMobile && groupRef.current) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
        }
    });

    return (
        <group ref={groupRef} scale={isMobile?1:1.3}>
            {children}
        </group>
    );
}

export default HeroCamera;
