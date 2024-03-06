import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header({
  initialSearchQuery,
}: {
  initialSearchQuery: any;
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || "");

  const handleSearch = () => {
    router.push(
      `/service/search/searchResult?query=${encodeURIComponent(searchQuery)}`
    );
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div>
        <header>
          <div css={wrapperStyle}>
            <img css={imageStyle} alt="Yahoo!フリマ" src="/yahoo.svg" />
            <div css={rightStyle}>
              <a href="https://www.yahoo.co.jp/">Yahoo! JAPAN</a>
              <p css={mypageStyle}>マイページ</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="search"
              placeholder="何をお探しですか?"
              className=""
              style={{ width: "710px", height: "36px" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              type="submit"
              className=""
              style={{ width: "36px", height: "36px" }}
              onClick={handleSearch}>
              <img src="/serch.svg" alt="検索" />
            </button>

            <ul
              className="category-search"
              style={{ display: "flex", listStyleType: "none", padding: 0 }}>
              <li className="" style={{ textDecoration: "none" }}>
                <a
                  data-cl-nofollow="on"
                  href="/category"
                  style={{ textDecoration: "none" }}>
                  <img src="/category.svg" alt="カテゴリ検索" />
                  <span className="" style={{ color: "red", fontSize: "12px" }}>
                    カテゴリから探す
                  </span>
                </a>
              </li>
              <li className="">
                <a
                  data-cl-nofollow="on"
                  href="/brand"
                  className=""
                  style={{ textDecoration: "none" }}>
                  <img src="/brand.svg" alt="ブランド検索" />
                  <span
                    className=""
                    style={{
                      color: "red",
                      fontSize: "12px",
                    }}>
                    ブランドから探す
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}

const imageStyle = css({
  width: "94px",
  height: "20px",
});

const wrapperStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const rightStyle = css({
  display: "flex",
  marginLeft: "auto",
});

const mypageStyle = css({
  marginBottom: "0px",
  marginTop: "0px",
  marginLeft: "8px",
});
