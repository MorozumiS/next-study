import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

interface Item {
  id: string;
  image: string;
  price: string;
}

interface Props {
  item: Item;
}

const ItemComponent: React.FC<Props> = ({ item }) => {
  return (
    <div css={itemWrapperStyle}>
      <Link href={`/service/item/${item.id}`} passHref>
        <div style={{ position: "relative" }}>
          <Image
            src={item.image}
            alt="商品画像"
            loading="lazy"
            width={161}
            height={161}
            css={imageStyle}
          />
          <div css={overlayStylePrice}>
            <p>{item.price}</p>
            <div>
              <button css={likeButtonStyle}>
                <Image src="/like.svg" alt="いいね" width={28} height={28} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemComponent;

const imageStyle = css({
  borderRadius: "8px",
  marginRight: "16px",
});

const itemWrapperStyle = css({
  position: "relative", // 要素を相対的に配置
  display: "inline-block", // インラインブロック要素設定
});

const overlayStylePrice = css({
  position: "absolute", // 要素を絶対的に配置
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "90%", // 幅設定
  height: "auto",
  bottom: -10, // 下端に配置
  marginRight: "16px",
  padding: "2px",
  fontWeight: "bold", // 太さ
  color: "white", // 色
  fontFamily:
    "メイリオ, Meiryo, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', sans-serif", // フォントファミリー
});

const likeButtonStyle = css({
  border: "none",
  padding: 0,
  background: "none",
  appearance: "none",
});
