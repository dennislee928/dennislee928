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
  const [active, setActive] = useState(true);

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
    <div className="min-h-screen bg-[#001010] text-cyan-500 p-8">
      <Animator active={active}>
        <main>
          {data && (
            <div className="max-w-4xl mx-auto">
              <Text as="h1" className="text-2xl font-bold mb-6">
                DNS Data Explorer
              </Text>

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
