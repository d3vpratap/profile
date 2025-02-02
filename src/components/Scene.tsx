import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import Keyboard from "./Keyboard";

const Scene: React.FC = () => {
  return (
    <Canvas
      style={{ background: "transparent" }}
      camera={{ position: [0, 2, 5] }}
    >
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <OrbitControls enableZoom={false} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <Keyboard />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
