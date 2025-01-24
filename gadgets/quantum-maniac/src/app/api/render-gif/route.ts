// src/app/api/render-gif/route.ts
import { NextResponse } from "next/server";
import GIFEncoder from "gifencoder";
import { createCanvas } from "canvas";

// 添加類型聲明
declare module "gifencoder";

export async function GET() {
  try {
    const encoder = new GIFEncoder(400, 400);
    const canvas = createCanvas(400, 400);
    const ctx = canvas.getContext("2d");

    // 啟動 GIF 編碼器
    encoder.start();
    encoder.setRepeat(0); // 0 代表無限循環
    encoder.setDelay(100); // 每幀延遲 100ms
    encoder.setQuality(10); // 較低的質量以減小文件大小

    // 創建量子效果動畫
    for (let frame = 0; frame < 20; frame++) {
      if (!ctx) continue;

      // 清除畫布
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 400, 400);

      // 繪製量子核心
      ctx.beginPath();
      ctx.arc(200, 200, 50, 0, Math.PI * 2);
      ctx.fillStyle = "#00ffcc";
      ctx.fill();

      // 繪製電子軌道
      for (let i = 0; i < 3; i++) {
        const angle = (frame / 20) * Math.PI * 2 + (i * Math.PI * 2) / 3;
        const x = 200 + Math.cos(angle) * 100;
        const y = 200 + Math.sin(angle) * 100;

        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#ff6600";
        ctx.fill();
      }

      // 添加當前幀到 GIF
      encoder.addFrame(ctx);
    }

    encoder.finish();

    // 返回生成的 GIF
    return new NextResponse(encoder.out.getData(), {
      headers: {
        "Content-Type": "image/gif",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error: unknown) {
    console.error("GIF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate GIF" },
      { status: 500 }
    );
  }
}
