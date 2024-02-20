import { css } from "@emotion/react";

interface Item {
  image: string;
  price: string;
}

interface Props {
  item: Item;
  index: number;
}

const ItemComponent: React.FC<Props> = ({ item, index }) => {
  return (
    <div key={index} css={itemWrapperStyle}>
      <a href={`Litem/${index + 1}`} data-cl-nofollow="on">
        <div css={overlayStylePrice}>
          <p>{item.price}</p>
        </div>
        <div css={overlayStyle}>
          <button>いいね！</button>
        </div>
        <img src={item.image} alt="商品画像" loading="lazy" css={imageStyle} />
      </a>
    </div>
  );
};

export default ItemComponent;

const imageStyle = css({
  width: "100px",
  height: "100px",
  borderRadius: "8px",
  marginRight: "16px",
});

const itemWrapperStyle = css({
  position: "relative", // 要素を相対的に配置
  display: "inline-block", // インラインブロック要素設定
  marginRight: "16px",
  marginBottom: "16px",
});

const linkStyle = css({
  textDecoration: "none",
});

const overlayStylePrice = css({
  position: "absolute", // 要素を絶対的に配置
  bottom: -10, // 下端に配置
  left: 0, // 左端に配置
  width: "100%", // 幅設定
  height: "auto",
});

const overlayStyle = css({
  position: "absolute", // 要素を絶対的に配置する
  bottom: -10, // 下端に配置
  left: 60, // 左端に配置
  width: "10%", // 幅設定
  padding: "2px",
});
