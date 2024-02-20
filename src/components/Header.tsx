import { css } from "@emotion/react";

export default function Header() {
  return (
    <div>
      <div css={wrapperStyle}>
        <header>
          <div>
            <img css={imageStyle} alt="Yahoo!フリマ" src="/yahoo.svg" />
          </div>
          <div css={rightStyle}>
            <a href="https://www.yahoo.co.jp/">Yahoo! JAPAN</a>
            <p css={mypageStyle}>マイページ</p>
          </div>
          <div>
            <form action="" className="" style={{ display: "flex" }}>
              <div
                role="combobox"
                aria-haspopup="listbox"
                aria-owns="react-autowhatever-1"
                aria-expanded="false"
                style={{
                  position: "relative",
                  width: "100%",
                  marginRight: "8px",
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
                  style={{ width: "100%" }}
                />
                <div
                  id="react-autowhatever-1"
                  role="listbox"
                  style={{ display: "none" }}></div>
              </div>
              <button type="submit" disabled className="sc-14dcb79f-4 cYuqVe">
                <img alt="検索" width="18" height="18" />
              </button>
            </form>
            <ul className="sc-14dcb79-5 bsXwaV" style={{ display: "flex" }}>
              <li className="sc-14dcb79f-6 giMwXG">
                <a
                  data-cl-nofollow="on"
                  href="/category"
                  style={{ display: "flex" }}>
                  <img
                    src="data:image/svg+xml;base64,P.sPSIjRjcyRTUyIi8+Cjwvc3ZnP90="
                    alt="カテゴリ検索"
                  />
                  <span className="sc-b9519356-0 dGGcod">カテゴリから探す</span>
                </a>
              </li>
              <li className="sc-14dcb79f-6 giMwXG">
                <a
                  data-cl-nofollow="on"
                  href="/brand"
                  className="sc-af114357-0 gWize f">
                  <img
                    src="data:image/svg+xml;base64,P.sPSIjRjcyRTUyIi8+Cjwvc3ZnP"
                    alt="ブランド検索"
                  />
                  <span className="sc-b9519356-0 dGGcod">ブランドから探す</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="error-mso-style"></div>
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
  alignItems: "center",
  marginLeft: "auto",
});

const mypageStyle = css({
  marginBottom: "0px",
  marginTop: "0px",
  marginLeft: "8px",
});
