import { css } from "@emotion/react";
import Link from "next/link";

interface ItemBuyButtonProps {
  itemId: string;
  price: string;
}

export default function ItemBuyButton({ itemId, price }: ItemBuyButtonProps) {
  return (
    <div>
      <Link href={`/service/buy/${itemId}?price=${encodeURIComponent(price)}`}>
        <a
          id="item_buy_button"
          data-cl-nofollow="on"
          data-cl-cl_index="1"
          css={buttonStyle}>
          <div css={textStyle}>購入手続きへ</div>
        </a>
      </Link>
    </div>
  );
}

const buttonStyle = css({
  width: "100%",
  height: "44px",
  padding: "10px 20px",
  justifyContent: "center",
  display: "inline-flex",
  textDecoration: "none",
  boxSizing: "border-box",
  borderRadius: "5px",
  background: "red",
  alignItems: "center",
});

const textStyle = css({
  color: "white",
  fontSize: "14px",
  fontFamily:
    "メイリオ, Meiryo, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'MS Ｐゴシック', 'MS UI Gothic', Helvetica, Arial, sans-serif",
});
