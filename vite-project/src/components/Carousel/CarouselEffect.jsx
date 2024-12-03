// src/components/CarouselEffect.js
import React from "react";
import Carousel from "react-responsive-carousel";
import "react-multi-carousel/lib/styles.css";
import { img } from "./image/img"; // Assuming img is an array of image paths
import classes from "./Carousel.module.css";

function CarouselEffect({
  autoPlay = true,
  autoPlaySpeed = 3000,
  infinite = true,
  showDots = false,
  arrows = true,
}) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        infinite={infinite}
        showDots={showDots}
        arrows={arrows}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img src={imageItemLink} key={index} alt="carouselimg" />
          // return img key={imageItemLink}
        ))}
      </Carousel>
      <div className={classes.hero_img}> </div>
    </div>
  );
}

export default CarouselEffect;
