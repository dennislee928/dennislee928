"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prankLevel, setPrankLevel] = useState(1);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`/api/prank-weather?level=${prankLevel}`);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("獲取天氣失敗：", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [prankLevel]);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">天氣惡作劇</h1>
      {loading ? (
        <p>載入中...</p>
      ) : (
        <div className="space-y-4">
          {weather?.records?.location?.map((loc) => (
            <div key={loc.locationName}>
              <h2>{loc.locationName}</h2>
              {/* 顯示天氣資料 */}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
