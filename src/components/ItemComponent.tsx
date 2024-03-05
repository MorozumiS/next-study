import { css } from "@emotion/react";

export default function ItemComponent() {
  return (
    <div style={{ backgroundColor: "#F1F1F1" }}>
      <div css={itemContainerStyle}>
        <div css={marginStyle}>
          <img css={imageStyle} src="/itemUsagi.jpeg" alt="アイテム画像" />
        </div>
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
  width: "460px",
  height: "520px",
  objectFit: "cover",
});

const marginStyle = css({
  width: "572px",
  height: "572px",
  textAlign: "center",
});
