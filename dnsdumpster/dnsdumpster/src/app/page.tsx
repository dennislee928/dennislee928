"use client";

import { useState, useEffect } from "react";

async function fetchDnsData(domain: string) {
  const response = await fetch(`/api/dnslookup?domain=${domain}`);

  if (!response.ok) {
    const errorData = await response.text();
    console.log("Error response:", errorData);
    throw new Error("Failed to fetch DNS data");
  }

  return response.json();
}

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDnsData("cloudflare.com");
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <main>
        {data && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold mb-4">
              DNS Data for cloudflare.com:
            </h2>
            <pre className="bg-gray-800 p-4 rounded overflow-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
