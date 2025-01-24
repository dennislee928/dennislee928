// src/app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          🌌 Quantum GitHub Visualizer
        </h1>

        <div className="grid gap-6">
          <section className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Live Stats</h2>
            <Image
              src="/api/stats"
              alt="GitHub Stats"
              width={400}
              height={120}
              className="w-full max-w-lg mx-auto"
            />
          </section>

          <section className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Quantum Visualization</h2>
            <div className="aspect-video relative">
              <iframe
                src="/embed"
                className="w-full h-full absolute"
                frameBorder="0"
              />
            </div>
          </section>

          <section className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Animated Version</h2>
            <Image
              src="/api/render-gif"
              alt="Animated Stats"
              width={400}
              height={400}
              className="w-full max-w-lg mx-auto"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
