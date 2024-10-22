'use client'
import {useEffect, useState} from "react";
import {Work_Sans} from 'next/font/google';

import ProjectCarousel from "@/components/ProjectCarousel";
import images from '@/public/images';

const work = Work_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function Home() {
    const [hoveredId, setHoveredId] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    return (
        <div className="home w-full px-4">
            <div className="header">
                <h1 className="text-6xl border-b-[12px] border-[#171717]">gagu</h1>
            </div>
            <div className="body w-full mt-5">
                <div className="projects flex flex-row flex-wrap gap-6">
                    <div className={`stool-project flex flex-col w-[100px] desktop:w-[200px]`}>
                        <ProjectCarousel
                            projectName={"stool"}
                            images={images.stool}
                            isHovered={hoveredId === 'stool'}
                            onMouseEnter={handleMouseEnter}
                        />
                        <span className={`${work.className} text-3xl font-medium mt-2`}>stool X</span>
                    </div>
                    <div className={`apartment-cabinet-project flex flex-col w-[200px] desktop:w-[400px]`}>
                        <ProjectCarousel
                            projectName={"apartment-cabinet"}
                            images={images.apartmentcabinet}
                            isHovered={hoveredId === 'apartment-cabinet'}
                            onMouseEnter={handleMouseEnter}
                        />
                        <span className={`inline ${work.className} text-4xl font-medium mt-2`}>apartment cabinet</span>
                    </div>
                    <div className={`stool-project flex flex-col w-[130px] desktop:w-[360px]`}>
                        <ProjectCarousel
                            projectName={"chairh"}
                            images={images.chairh}
                            isHovered={hoveredId === 'chairh'}
                            onMouseEnter={handleMouseEnter}
                        />
                        <span className={`inline ${work.className} text-4xl font-medium mt-2`}>chair h</span>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    );
}
