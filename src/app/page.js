'use client'
import {useEffect, useState} from "react";
import {Work_Sans} from 'next/font/google';
import Image from "next/image";
import {Carousel} from 'react-responsive-carousel';

import ProjectCarousel from "@/components/ProjectCarousel";
import images from '@/public/images';

const work = Work_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function Home() {
    const [selectedProjects, setSelectedProjects] = useState(null);

    const handleOnClick = (e, images, index) => {
        setSelectedProjects({images, index});
    };

    const handleClose = () => {
        setSelectedProjects(null);
    };

    return (
        <div className="home w-full px-4 h-screen">
            <div>
                <div className="header">
                    <h1 className="text-6xl border-b-[12px] border-[#171717]">gagu</h1>
                </div>
                <div className="body w-full mt-5">
                    <div className="projects flex flex-row flex-wrap gap-6">
                        <div className={`stool-project flex flex-col w-[100px] desktop:w-[200px]`}>
                            <ProjectCarousel
                                projectName={"stool"}
                                images={images.stool}
                                handleOnClick={handleOnClick}
                            />
                            <span className={`${work.className} text-3xl font-medium mt-2`}>stool X</span>
                        </div>
                        <div className={`apartment-cabinet-project flex flex-col w-[200px] desktop:w-[400px]`}>
                            <ProjectCarousel
                                projectName={"apartment-cabinet"}
                                images={images.apartmentcabinet}
                                handleOnClick={handleOnClick}
                            />
                            <span className={`inline ${work.className} text-4xl font-medium mt-2`}>apartment cabinet</span>
                        </div>
                        <div className={`stool-project flex flex-col w-[130px] desktop:w-[360px]`}>
                            <ProjectCarousel
                                projectName={"chairh"}
                                images={images.chairh}
                                handleOnClick={handleOnClick}
                            />
                            <span className={`inline ${work.className} text-4xl font-medium mt-2`}>chair h</span>
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>

            {selectedProjects && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
                    onClick={handleClose}
                >
                    <Carousel
                        autoPlay={false}
                        infiniteLoop={true}
                        stopOnHover={true}
                        showStatus={false}
                        showArrows={false}
                        showIndicators={false}
                        showThumbs={false}
                        useKeyboardArrows={true}
                        selectedItem={selectedProjects.index}
                    >
                        {selectedProjects.images.map((item, index) => {
                            return (
                                <div className="max-w-full max-h-full object-contain">
                                    <Image
                                        src={item}
                                        alt={`image-${index+1}`}
                                    />
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            )}
        </div>
    );
}
