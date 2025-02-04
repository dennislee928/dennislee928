"use client";

import { useState, useEffect } from "react";
import { Animator } from "@arwes/react-animator";
import { Animated } from "@arwes/react-animated";
import { Text } from "@arwes/react";

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
  const [domain, setDomain] = useState("cloudflare.com");

  const handleSearch = async () => {
    if (!domain || !domain.includes(".")) {
      return;
    }

    try {
      const result = await fetchDnsData(domain);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-[#001010] text-cyan-500 p-8">
      <Animator active={true}>
        <main>
          {data && (
            <div className="max-w-4xl mx-auto">
              <Text as="h1" className="text-2xl font-bold mb-6">
                DNS Data Explorer
              </Text>
              <div className="flex justify-center gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Enter a domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="px-4 py-2 bg-[#001818] border border-cyan-900 rounded-md focus:outline-none focus:border-cyan-500"
                />
                <button
                  onClick={handleSearch}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md transition-colors"
                >
                  Search
                </button>
              </div>

              <Animated
                className="p-6 bg-[#001818] rounded-lg border border-cyan-900"
                animated={{
                  transitions: {
                    entering: { y: [-20, 0], opacity: [0, 1] },
                    exiting: { y: [0, -20], opacity: [1, 0] },
                  },
                }}
              >
                <Text as="h2" className="text-lg font-bold mb-4">
                  DNS Data for cloudflare.com:
                </Text>
                <pre className="font-mono overflow-auto">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </Animated>
            </div>
          )}
        </main>
      </Animator>
    </div>
  );
}
