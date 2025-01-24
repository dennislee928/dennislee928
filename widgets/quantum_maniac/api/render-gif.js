import puppeteer from "puppeteer";
import GIFEncoder from "gifencoder";
import { createCanvas } from "canvas";
import fs from "fs";

export default async function handler(req, res) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Load your 3D model webpage
  await page.goto("https://dennislee928-upyr.vercel.app/", {
    waitUntil: "networkidle2",
  });

  const width = 600,
    height = 400;
  const encoder = new GIFEncoder(width, height);
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(100); // Frame delay
  encoder.setQuality(10);

  // Capture multiple frames to create an animated effect
  for (let i = 0; i < 20; i++) {
    await page.screenshot({ path: `/tmp/frame${i}.png` });
    const img = fs.readFileSync(`/tmp/frame${i}.png`);
    const imgObj = new Image();
    imgObj.src = img;
    ctx.drawImage(imgObj, 0, 0, width, height);
    encoder.addFrame(ctx);
  }

  encoder.finish();
  await browser.close();

  // Send GIF as response
  res.setHeader("Content-Type", "image/gif");
  res.status(200).send(encoder.out.getData());
}
