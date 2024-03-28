import { css } from "@emotion/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ItemBuyButton from "./ItemBuyButton";

interface Item {
  id: string;
  image: string;
  price: string;
}

interface Props {
  items: Item[];
}

export default function ItemComponent({ items }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [fetchedItem, setFetchedItem] = useState<Item | undefined>(undefined);

  useEffect(() => {
    if (id && items) {
      const fetchedItem = items.find((item) => item.id === String(id));
      setFetchedItem(fetchedItem);
    }
  }, [id, items]);

  if (!items || !fetchedItem) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "#F1F1F1" }}>
      <div css={itemContainerStyle}>
        <div css={marginStyle}>
          <Image
            css={imageStyle}
            src={fetchedItem.image}
            alt="アイテム画像"
            width={460}
            height={520}
          />
        </div>
        <ItemBuyButton itemId={fetchedItem.id} price={fetchedItem.price} />
      </div>
    </div>
  );
}

const itemContainerStyle = css({
  display: "grid",
  gridTemplateColumns: "minmax(0px, 1fr) 346px",
  gridTemplateRows: "auto 1fr",
  gap: "32px",
  maxWidth: "950px",
  margin: "20px auto 50px",
  padding: "32px",
  background: "rgb(255, 255, 255)",
});

const imageStyle = css({
  objectFit: "cover",
});

const marginStyle = css({
  width: "572px",
  height: "572px",
  textAlign: "center",
});
