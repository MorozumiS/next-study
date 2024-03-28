import Header from "@/components/Header";
import ItemComponent from "@/components/ItemComponent";

export default function Item() {
  return (
    <div>
      <Header />
      <ItemComponent items={[]} />
    </div>
  );
}
