import { css } from "@emotion/react";

export default function Title() {
  return (
    <div>
      <h1 css={titleStyle}>This is Title</h1>
    </div>
  );
}

const titleStyle = css({
  color: `red`,
});
