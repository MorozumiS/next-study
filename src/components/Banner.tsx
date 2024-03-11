import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner() {
  const images = [
    "/webTop_1.png",
    "/webTop2.png",
    "/webTop3.png",
    "/webTop4.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div css={sliderContainerStyle}>
      <div
        css={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}>
        {images.map((image, index) => (
          <div key={index} css={slideStyle}>
            <Image
              src={image}
              alt={`Banner ${index}`}
              width={712}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
const sliderContainerStyle = css({
  position: "relative",
  overflow: "hidden",
});

const slideStyle = css({
  flex: "0 0 auto",
});
