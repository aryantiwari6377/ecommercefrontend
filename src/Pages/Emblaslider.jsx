import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../Styles/EmblaSlider.css'; 
import clothscat2 from "../images/clothscat2.jpg";
import furniture from "../images/furniture.png";
import electronicscat from "../images/electronicscat.jpg";
import shoescat from "../images/shoescat.jpg";


function EmblaCarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla w-full w-[500px] mx-auto">
      <div className="embla__viewport w-[300px] ml-[100px]" ref={emblaRef}>
        <div className="embla__container flex w-full">
          <div className="embla__slide flex-[0_0_100%] w-full">
            <img src={clothscat2} alt="Slide 1" className="w-full h-auto" />
          </div>
          <div className="embla__slide flex-[0_0_100%]">
            <img src={electronicscat} alt="Slide 2" className="w-full h-auto" />
          </div>
          <div className="embla__slide flex-[0_0_100%]">
            <img src={shoescat} alt="Slide 3" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <button
        className={`embla__button embla__button--prev ${prevBtnDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        Prev
      </button>
      <button
        className={`embla__button embla__button--next ${nextBtnDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        Next
      </button>
    </div>
  );
}

export default EmblaCarouselComponent;
