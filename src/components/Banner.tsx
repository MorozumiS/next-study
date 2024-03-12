import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Banner() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    vertical: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div
      style={{
        width: "711px",
        margin: "auto",
        textAlign: "center",
        padding: "0px 8px",
      }}>
      <Slider {...settings}>
        <div>
          <Image src="/webTop1.png" alt="Slide 1" width={711} height={250} />
        </div>
        <div>
          <Image src="/webTop2.png" alt="Slide 2" width={711} height={250} />
        </div>
        <div>
          <Image src="/webTop3.png" alt="Slide 3" width={711} height={250} />
        </div>
        <div>
          <Image src="/webTop4.png" alt="Slide 4" width={711} height={250} />
        </div>
      </Slider>
    </div>
  );
}
