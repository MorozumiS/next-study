import { css } from "@emotion/react";
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
        <div css={overlayStylePrice}>
          <p css={priceTextStyle}>{item.price}</p>
        </div>
        <div css={overlayStyle}>
          <button>いいね！</button>
        </div>
        <img src={item.image} alt="商品画像" loading="lazy" css={imageStyle} />
      </Link>
    </div>
  );
};

export default ItemComponent;

const imageStyle = css({
  width: "161px",
  height: "161px",
  borderRadius: "8px",
  marginRight: "16px",
});

const itemWrapperStyle = css({
  position: "relative", // 要素を相対的に配置
  display: "inline-block", // インラインブロック要素設定
  // marginRight: "16px",
  // marginBottom: "16px",
});

const linkStyle = css({
  textDecoration: "none",
});

const overlayStylePrice = css({
  position: "absolute", // 要素を絶対的に配置
  bottom: -10, // 下端に配置
  left: 0, // 左端に配置
  width: "50%", // 幅設定
  height: "auto",
});

const overlayStyle = css({
  position: "absolute", // 要素を絶対的に配置
  bottom: 0, // 下端に配置
  right: 40, // 右端に配置
  width: "10%", // 幅設定
  padding: "2px",
});

const priceTextStyle = css({
  fontWeight: "bold", // 太さ
  color: "white", // 色
  fontFamily:
    "メイリオ, Meiryo, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', sans-serif", // フォントファミリー
});
