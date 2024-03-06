import Header from "@/components/Header";
import ItemComponent from "@/components/main/Main";

export default function Home() {
  const items = [
    {
      image: "/item.jpeg",
      price: "1800円",
    },
    {
      image: "/itemUsagi.jpeg",
      price: "5800円",
    },
    {
      image: "/item.jpeg",
      price: "2300円",
    },
    {
      image: "/itemUsagi.jpeg",
      price: "10000円",
    },
    {
      image: "/item.jpeg",
      price: "2500円",
    },
  ];

  // 4つの要素ごとに分割
  const chunkedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    chunkedItems.push(items.slice(i, i + 4));
  }

  return (
    <div>
      <Header />
      <div>
        <h2 className="" style={{ color: "#000" }}>
          <span className="">あなたへのおすすめ</span>
        </h2>
        {chunkedItems.map((chunk, index) => (
          <div key={index} style={{ display: "flex" }}>
            {chunk.map((item, innerIndex) => (
              <ItemComponent key={innerIndex} item={item} index={0} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
