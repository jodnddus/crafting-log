'use client'
import React from 'react';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

function ProjectCarousel({projectName, images, size, handleOnClick}) {
    return (
        <div
            className={`project-carousel cursor-pointer hover:scale-105 transition-all border border-black border-[2px]`}
        >
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                stopOnHover={true}
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
            >
                {images.map((item, index) => {
                    return (
                        <div
                            className="w-full h-full relative"
                            key={`${projectName}-image-${index + 1}`}
                            onClick={(e) => handleOnClick(e, images, index)}
                        >
                            <Image
                                src={item}
                                alt={`${projectName}-image-${index + 1}`}
                                aria-hidden
                                placeholder="blur"
                            />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default ProjectCarousel;