import React, { useCallback, useEffect, useRef } from "react";
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import { useDotButton } from "./EmblaCarouselDotButton";
import { usePrevNextButtons } from "./EmblaCarouselPrevButton";

type PropType = {
    slides: any[];
    renderItem: any;
    options?: EmblaOptionsType;
    showButtons?: boolean;
    playOnInit?: boolean;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
    active?: boolean;
    stopOnFocusIn?: boolean;
    styles?: {
        containerClassName?: string;
        viewportClassName?: string;
        innerClassName?: string;
    };
};

const EmblaCarouselScale: React.FC<PropType> = (props) => {
    const { slides, options = { loop: true }, renderItem, showButtons=false,  playOnInit = true,
    stopOnFocusIn = true,
    stopOnInteraction = false,
    active = true,
    stopOnMouseEnter = true,} = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({
            playOnInit: playOnInit,
            stopOnInteraction: stopOnInteraction,
            stopOnMouseEnter: stopOnMouseEnter,
            active: active,
            stopOnFocusIn: stopOnFocusIn,
            delay: 1500
        }),
    ]);
    const tweenFactor = useRef(0);
    const TWEEN_FACTOR_BASE = 0.52;
    const tweenNodes = useRef<HTMLElement[]>([]);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector(".tween-node") as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const isScrollEvent = eventName === "scroll";
        const focusedSlideIndex = emblaApi.selectedScrollSnap();

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return;
                const scale = slideIndex === focusedSlideIndex ? 1 : 0.89;
                const opacity = slideIndex === focusedSlideIndex ? 1 : 0.5;
                const tweenNode = tweenNodes.current[slideIndex];
                tweenNode.style.transform = `scale(${scale})`;
                tweenNode.style.opacity = `${opacity}`;
            });
        });
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenScale(emblaApi);

        emblaApi
            .on("reInit", setTweenNodes)
            .on("reInit", setTweenFactor)
            .on("reInit", tweenScale)
            .on("scroll", tweenScale)
            .on("slideFocus", tweenScale);
    }, [emblaApi, tweenScale]);

    return (
        <div className="">
            <div className="embla-scale">
                <div className="embla__viewport-scale" ref={emblaRef}>
                    <div className="embla__container-scale">
                        {slides.map((item, index) => (
                            <div className="embla__slide-scale" key={index}>
                                <div className="tween-node transition-ease">{renderItem(item, index)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmblaCarouselScale;
