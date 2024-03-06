import Header from "@/components/Header";
import ItemComponent from "@/components/ItemComponent";

export default function Item() {
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
  const chunkedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    chunkedItems.push(items.slice(i, i + 4));
  }
  return (
    <div>
      <Header />
      <ItemComponent items={items} />
    </div>
  );
}
