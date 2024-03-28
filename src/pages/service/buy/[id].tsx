import { useRouter } from "next/router";

export default function ItemBuyPage() {
  const router = useRouter();
  const { price } = router.query;

  return (
    <div>
      <div>価格: {price}</div>
    </div>
  );
}
