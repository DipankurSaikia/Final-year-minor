import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function ModelViewer({ objUrl }) {
  const groupRef = useRef();

  useEffect(() => {
    if (!objUrl || !groupRef.current) return;

    const loader = new OBJLoader();
    loader.load(
      objUrl,
      (obj) => {
        groupRef.current.clear();
        groupRef.current.add(obj);
      },
      undefined,
      (err) => console.error("OBJ Load Error:", err)
    );
  }, [objUrl]);

  return <group ref={groupRef} />;
}
