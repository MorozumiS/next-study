import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ItemComponent from "@/components/main/Main";
import { Key } from "react";

export default function Home() {
  const items = [
    {
      id: "1",
      image: "/item.jpeg",
      price: "1800円",
    },
    {
      id: "2",
      image: "/itemUsagi.jpeg",
      price: "5800円",
    },
    {
      id: "3",
      image: "/item.jpeg",
      price: "2300円",
    },
    {
      id: "4",
      image: "/itemUsagi.jpeg",
      price: "10000円",
    },
    {
      id: "5",
      image: "/item.jpeg",
      price: "2500円",
    },
  ];

  // 4つの要素ごとに分割
  const chunkedItems: any[][] = [];
  items.forEach((item, index) => {
    // 要素の数を計算する
    const chunkIndex = Math.floor(index / 4);
    if (!chunkedItems[chunkIndex]) {
      // 新しい配列を作る
      chunkedItems[chunkIndex] = [];
    }
    // 要素を新しい配列に追加する
    chunkedItems[chunkIndex].push(item);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Header />
      <Banner />
      <div style={{ textAlign: "left" }}>
        <h2 style={{ color: "#000" }}>
          <span>あなたへのおすすめ</span>
        </h2>
        <div style={{ justifyContent: "center" }}>
          {chunkedItems.map((chunk, index) => (
            <div key={index} style={{ display: "flex" }}>
              {chunk.map((item, innerIndex: Key | null | undefined) => (
                <ItemComponent key={innerIndex} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
