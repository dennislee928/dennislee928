import { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/dnslookup",
        destination: "https://api.dnsdumpster.com/domain/:domain", // 目標 API 伺服器
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/dnslookup",
        headers: [
          {
            key: "Authorization",
            value: `Bearer ${process.env.DNSDUMPSTER_API_KEY}`, // 使用環境變量設置 API 金鑰
          },
        ],
      },
    ];
  },
};

export default nextConfig;
