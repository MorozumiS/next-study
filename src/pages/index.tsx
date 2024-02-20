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

  return (
    <div>
      <Header />
      <div>
        <h2 className="" style={{ color: "#000" }}>
          <span className="">あなたへのおすすめ</span>
        </h2>
        <div className="" style={{ display: "flex" }}>
          {items.map((item, index) => (
            <ItemComponent key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
