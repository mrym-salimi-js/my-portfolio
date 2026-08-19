"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ImageSliderPropTypes = {
  images: {
    id: number;
    src: string;
  }[];
};

export function ImagesSlider({ images }: ImageSliderPropTypes) {
  return (
    <div className="w-full lg:w-[40%] ">
      <Carousel dir="ltr" className="w-full flex flex-col gap-4 ">
        {/* Buttons */}
        <div className=" flex items-center gap-2 px-2">
          <CarouselPrevious className="static translate-x-0 translate-y-0" />
          <CarouselNext className="static translate-x-0 translate-y-0" />
        </div>

        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img.id}>
              <div className="flex h-60 bg-transparent w-full items-center justify-center overflow-hidden relative">
                <Image
                  src={img.src}
                  alt={`project-image-${img.id}`}
                  width={1200}
                  height={800}
                  className="h-full w-full rounded-4xl border-8 border-primary/10 object-fill "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
