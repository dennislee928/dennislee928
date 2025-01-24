import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import GIFEncoder from "gifencoder";
import { createCanvas } from "canvas";

export default async function handler(req, res) {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });

  const page = await browser.newPage();
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
  encoder.setDelay(100);
  encoder.setQuality(10);

  for (let i = 0; i < 10; i++) {
    const screenshot = await page.screenshot();
    const img = new Image();
    img.src = screenshot;
    ctx.drawImage(img, 0, 0, width, height);
    encoder.addFrame(ctx);
  }

  encoder.finish();
  await browser.close();

  res.setHeader("Content-Type", "image/gif");
  res.status(200).send(encoder.out.getData());
}
