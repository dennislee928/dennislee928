// src/app/embed/page.tsx
import { Suspense } from "react";
import dynamic from "next/dynamic";

const QuantumModel = dynamic(() => import("@/components/QuantumModel"), {
  ssr: false,
  loading: () => <div>Loading Quantum Visualization...</div>,
});

export default function EmbedPage() {
  return (
    <div className="w-full h-screen bg-black">
      <Suspense fallback={<div>Loading...</div>}>
        <QuantumModel />
      </Suspense>
    </div>
  );
}
