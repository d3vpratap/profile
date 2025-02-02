import React, { useEffect, useState } from "react";
import { Text, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface KeyProps {
  char: string;
  position: [number, number, number];
  isPressed: boolean;
}

const Key: React.FC<KeyProps> = ({ char, position, isPressed }) => {
  const color = new THREE.Color(isPressed ? "#ff4444" : "#cccccc");
  const emissiveColor = isPressed ? "#ff4444" : "#111111";

  return (
    <group position={position}>
      <Box args={[0.9, 0.9, 0.3]}>
        <meshStandardMaterial
          color={color}
          metalness={0.3}
          roughness={0.3}
          emissive={new THREE.Color(emissiveColor)}
        />
      </Box>
      <Text
        position={[0, 0, 0.2]}
        fontSize={0.4}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {char}
      </Text>
    </group>
  );
};

const Keyboard: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string>("");
  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPressedKey(e.key.toUpperCase());
    };

    const handleKeyUp = () => {
      setPressedKey("");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((state) => {
    state.camera.position.y = 4 + Math.sin(state.clock.elapsedTime * 0.5) * 0.5; // Adjusted camera height
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group
      position={[0, -1, 0]}
      rotation={[-0.3, 0, 0]}
      scale={0.5} // Scale down the keyboard
    >
      {rows.map((row, rowIndex) => (
        <group
          key={rowIndex}
          position={[
            -(row.length * 0.55),
            -rowIndex * 1.2,
            Math.sin(rowIndex * 0.3) * 1.5, // Adds slight curvature
          ]}
        >
          {row.split("").map((char, charIndex) => (
            <Key
              key={char}
              char={char}
              position={[charIndex * 1.1, 0, 0]}
              isPressed={pressedKey === char}
            />
          ))}
        </group>
      ))}

      {/* Keyboard Base */}
      <mesh position={[0, -2, -1]}>
        <boxGeometry args={[10, 4, 0.5]} />
        <meshStandardMaterial color="#222" metalness={0.6} roughness={0.2} />
      </mesh>
    </group>
  );
};

export default Keyboard;
