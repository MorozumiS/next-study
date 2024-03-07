import { css } from "@emotion/react";

export default function Header() {
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <input
              type="search"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              name="word"
              value=""
              aria-autocomplete="list"
              aria-controls="react-autowhatever-1"
              placeholder="何をお探しですか?"
              className=""
              style={{ width: "710px", height: "36px" }}
            />
            <button
              type="submit"
              disabled
              className=""
              style={{ width: "36px", height: "36px" }}>
              <img src="/serch.svg" alt="検索" />
            </button>
            <div>
              <ul
                className="category-search"
                style={{ display: "flex", listStyleType: "none", padding: 0 }}>
                <li>
                  <a
                    data-cl-nofollow="on"
                    href="/category"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <img src="/category.svg" alt="カテゴリ検索" />
                    <span
                      className=""
                      style={{ color: "red", fontSize: "12px" }}>
                      カテゴリから探す
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    data-cl-nofollow="on"
                    href="/brand"
                    className=""
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}>
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
