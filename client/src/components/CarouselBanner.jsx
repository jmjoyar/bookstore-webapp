import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { bannerImg } from "../utils/img-banners.js";
import classes from "./Carousel.module.css";

export default function CarouselBanner() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const slides = bannerImg.map((image) => (
    <Carousel.Slide key={image}>
      <Image h={300} src={image} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      classNames={classes}
      controlsOffset="md"
      controlSize={32}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
      emblaOptions={{
        loop: true,
        dragFree: true,
      }}
    >
      {slides}
    </Carousel>
  );
}
