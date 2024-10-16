'use client'
import React from 'react';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

function ProjectCarousel({projectName, images, size, onMouseEnter, isHovered}) {
    return (
        <div
            className={`project-carousel cursor-pointer ${isHovered ? 'z-10' : 'z-1'} hover:scale-105 transition-all border border-black m-0.5`}
            onMouseEnter={() => onMouseEnter(projectName)}
        >
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                stopOnHover={true}
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                width={size}
            >
                {images.map((item, index) => {
                    return (
                        <div
                            key={`${projectName}-image-${index + 1}`}
                        >
                            <Image
                                alt={`${projectName}-image-${index + 1}`}
                                src={item}
                                aria-hidden
                                width={size}
                            />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default ProjectCarousel;