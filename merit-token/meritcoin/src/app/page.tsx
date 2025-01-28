import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>功德幣</title>
        <meta name="description" content="一個以佛教為主題的加密貨幣" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>歡迎來到功德幣</h1>
        <p>功德幣的使命是影響文化，並在黑暗中成為一盞明燈。</p>

        <div>
          <Image
            src="merit-token/meritcoin/public/long-shan.webp" // 確保您有這些圖片
            alt="龍山寺"
            width={600}
            height={400}
          />
          <Image
            src="merit-token/meritcoin/public/lama.webp" // 確保您有這些圖片
            alt="達賴喇嘛"
            width={600}
            height={400}
          />
        </div>

        <section>
          <h2>佛教的基本理念</h2>
          <p>
            佛教是一種強調慈悲和智慧的宗教，提倡通過修行達到內心的平和與解脫。
          </p>
        </section>

        <section>
          <h2>功德幣的願景</h2>
          <p>功德幣旨在通過加密技術促進慈善事業，並支持全球的佛教社群。</p>
        </section>

        <section>
          <h2>如何參與</h2>
          <p>
            您可以通過購買和使用功德幣來支持我們的使命，並成為全球佛教社群的一部分。
          </p>
        </section>
      </main>

      <footer>
        <p>聯絡方式: hello@gongdecoin.xyz</p>
      </footer>
    </div>
  );
}
