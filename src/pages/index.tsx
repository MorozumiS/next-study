import Header from "@/components/Header";
import Main from "@/components/main/Main";

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
      <Main />
    </div>
  );
}
