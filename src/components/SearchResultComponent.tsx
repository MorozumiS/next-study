import { css } from "@emotion/react";
import { useRouter } from "next/router";

export default function SearchResultComponent() {
  const router = useRouter();
  const { query } = router.query;

  return (
    <div css={containerStyle}>
      <div css={resultContainerStyle}>
        <div css={centerStyle}>
          <div css={leftSideStyle}>
            <select css={dropdownStyle}>
              <option value="" style={{ display: "none" }}>
                並び替え
              </option>
              <option value="recommended">おすすめ順</option>
              <option value="newer">新着順</option>
              <option value="reasonable">価格が安い順</option>
              <option value="expensive">価格が高い順</option>
              <option value="liked">いいね！の多い順</option>
            </select>
          </div>
          <div css={headingContainer}>
            <h1 color="dark">{query}</h1>
            <span color="dark">の検索結果</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const resultContainerStyle = css({
  display: "grid",
  gridTemplateColumns: "minmax(0px, 1fr) 346px",
  gridTemplateRows: "auto 1fr",
  gap: "32px",
  maxWidth: "1010px",
  margin: "0 97px 16px",
  background: "rgb(255, 255, 255)",
  boxSizing: "border-box",
});

const leftSideStyle = css({
  display: "block",
  width: "247px",
});

const centerStyle = css({
  display: "block",
  width: "1010px",
  height: "5565.250px",
  padding: "16px",
  backgroundColor: "#F1F1F1",
});

const containerStyle = css({
  backgroundColor: "#F1F1F1",
  paddingTop: "16px",
});

const dropdownStyle = css({
  boxSizing: "border-box",
  width: "100%",
  height: "40px",
  marginBottom: "16px",
  padding: "4px 32px 4px 56px",
  border: "none",
  borderRadius: "4px",
  backgroundImage: "url('/narabikae.svg'), url('/down.svg')",
  backgroundPosition: "left center, right center",
  backgroundSize: "40px, 20px",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgb(255, 255, 255)",
  fontSize: "14px",
  appearance: "none",
  outline: "none",
  cursor: "pointer",
});

const headingContainer = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});
