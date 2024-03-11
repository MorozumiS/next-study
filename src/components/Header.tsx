import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  return (
    <div>
      <div>
        <header>
          <div css={wrapperStyle}>
            <Image alt="Yahoo!フリマ" src="/logo.svg" width={188} height={34} />
            <div css={rightStyle}>
              <li
                style={{
                  display: "inline",
                  textDecoration: "none",
                  marker: "none",
                }}>
                <Link href="https://www.yahoo.co.jp/" css={LinkStyle}>
                  Yahoo! JAPAN
                </Link>
              </li>
              <Image
                alt="マイページイメージ"
                src="/prof_default.png"
                width={34}
                height={34}
                css={mypageImage}
              />
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
              aria-autocomplete="list"
              aria-controls="react-autowhatever-1"
              placeholder="何をお探しですか?"
              style={{
                width: "712px",
                height: "34px",
              }}
            />
            <button
              type="submit"
              disabled
              style={{ width: "36px", height: "36px" }}>
              <Image src="/serch.svg" alt="検索" width={18} height={18} />
            </button>
            <div>
              <ul
                className="category-search"
                style={{ display: "flex", listStyleType: "none", padding: 0 }}>
                <li>
                  <Link
                    data-cl-nofollow="on"
                    href="/category"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <Image
                      src="/category.svg"
                      alt="カテゴリ検索"
                      width={24}
                      height={24}
                    />
                    <span style={{ color: "red", fontSize: "12px" }}>
                      カテゴリから探す
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    data-cl-nofollow="on"
                    href="/brand"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <Image
                      src="/brand.svg"
                      alt="ブランド検索"
                      width={24}
                      height={24}
                    />
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                      }}>
                      ブランドから探す
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

const wrapperStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const rightStyle = css({
  display: "flex",
  marginLeft: "auto",
  alignItems: "center",
  fontSize: "12px",
});

const mypageStyle = css({
  marginBottom: "0px",
  marginTop: "0px",
  marginLeft: "8px",
  fontSize: "14px",
  fontWeight: "bold",
});

const mypageImage = css({
  border: "1px solid rgb(217, 217, 217)",
  borderRadius: "50%",
  overflow: "hidden",
  marginLeft: "8px",
  marginRight: "8px",
});

const LinkStyle = css({
  textDecoration: "none",
  color: "inherit",
});
