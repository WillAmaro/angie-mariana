"use client";
import { useCallback, useEffect, useMemo, useRef } from "react";
import EmblaCarouselScale from "../carousel/ScaleCarousel";
import imageJson from "../../../image-date.json";

function CarouselCard() {
  const OPTIONS = { loop: true };

  const renderItem = useCallback((item: any, index: number) => {
    return (
      <div className="carousel-container-render">
        <div className="carousel-container-image">
          <img
            src={item.src}
            alt={item.title}
            className="carousel-render-image"
          />
        </div>
      </div>
    );
  }, []);

  return (
    <div className="card">
      <EmblaCarouselScale
        slides={imageJson}
        options={OPTIONS}
        renderItem={renderItem}
      />
    </div>
  );
}

export default CarouselCard;
