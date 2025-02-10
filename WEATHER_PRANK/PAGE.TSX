"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("/api/weather");
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">天氣惡作劇</h1>
      {loading ? (
        <p>載入中...</p>
      ) : (
        <div className="space-y-4">{/* 這裡之後會加入惡作劇的天氣顯示 */}</div>
      )}
    </main>
  );
}
