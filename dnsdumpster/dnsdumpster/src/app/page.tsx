"use client";

import { useEffect, useState } from "react";
import {
  Animator,
  Text as ArwesText,
  FrameCorners,
  BleepsProvider,
} from "@arwes/react";
//import Image from "next/image";

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
    <BleepsProvider bleeps={{}}>
      <div className="min-h-screen bg-white dark:bg-black">
        <Animator>
          <div className="p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-8 items-center sm:items-start">
              {/* Display fetched data */}
              {data && (
                <FrameCorners className="w-full max-w-4xl p-4">
                  <ArwesText
                    as="h2"
                    className="text-lg font-bold mb-4 text-white"
                  >
                    DNS Data for cloudflare.com:
                  </ArwesText>
                  <pre className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded overflow-auto text-white">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </FrameCorners>
              )}
            </main>
          </div>
        </Animator>
      </div>
    </BleepsProvider>
  );
}
