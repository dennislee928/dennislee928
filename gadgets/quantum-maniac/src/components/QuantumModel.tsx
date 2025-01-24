/* eslint-disable react-hooks/exhaustive-deps */
// src/components/QuantumModel.tsx
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { fetchGitHubStats } from "@/utils/github";

export default function QuantumModel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let quantumCore: THREE.Mesh;
    const electrons: THREE.Mesh[] = [];

    async function init() {
      const stats = await fetchGitHubStats("dennislee928");

      // Three.js setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);

      // Lighting
      const light = new THREE.PointLight(0xffffff, 2, 100);
      light.position.set(10, 10, 10);
      scene.add(light);

      // Quantum Core
      const coreGeometry = new THREE.SphereGeometry(
        0.5 + stats.commitCount / 100,
        32,
        32
      );
      const coreMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffcc,
        emissive: 0x008080,
      });
      quantumCore = new THREE.Mesh(coreGeometry, coreMaterial);
      scene.add(quantumCore);

      // Add electrons
      for (let i = 0; i < stats.prCount; i++) {
        const electronGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const electronMaterial = new THREE.MeshBasicMaterial({
          color: 0xff6600,
        });
        const electron = new THREE.Mesh(electronGeometry, electronMaterial);
        electron.position.set(
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1
        );
        scene.add(electron);
        electrons.push(electron);
      }

      camera.position.z = 5;
      animate();
    }

    function animate() {
      requestAnimationFrame(animate);

      if (quantumCore) {
        quantumCore.rotation.y += 0.01;
        quantumCore.rotation.x += 0.005;
      }

      electrons.forEach((electron, i) => {
        electron.position.x = Math.cos(Date.now() * 0.001 + i) * (1.5 + i / 5);
        electron.position.z = Math.sin(Date.now() * 0.001 + i) * (1.5 + i / 5);
      });

      renderer.render(scene, camera);
    }

    init();

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen" />;
}
