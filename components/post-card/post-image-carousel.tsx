import { type FC } from "react";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "../ui";
import { type PostImage } from "@/lib/types";
import Image from "next/image";

export const PostImageCarousel: FC<{ images: PostImage[], firstName: string }> = ({ images, firstName }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent containerClass="rounded-xl">
        {images.map(({ url, _id }, index) => (
          <CarouselItem key={_id} className="aspect-square relative">
            <Image src={url} fill alt={`${firstName} post image ${index}`} className="object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious label="Previous Button" className="invisible md:visible left-2.5" />
      <CarouselNext label="Next Button" className="invisible md:visible right-2.5" />
      <CarouselDots />
    </Carousel>
  );
};
