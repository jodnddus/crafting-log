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
    const [isMobile, setIsMobile] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    useEffect(() => {
        const isMobile = /Mobi/i.test(window.navigator.userAgent);
        setIsMobile(isMobile);
    }, []);

    if (isMobile) {
        return (
            <div className={`flex items-center justify-center h-screen`}>
                <span className={`${work.className} text-3xl font-medium`}>
                    only desktop now 😭
                </span>
            </div>
        )
    }

    return (
        <div className="mx-64 my-2.5">
            <div className="header mb-28">
                {/*<h1 className="title text-8xl font-bold text-title-color mb-1.5">crafting log</h1>*/}
                {/*<span className="author text-4xl font-normal">by jowoongyeon</span>*/}
            </div>
            <div className="body">
                <div className="projects flex flex-row flex-wrap">
                    <div className={`stool-project flex flex-col`}>
                        <ProjectCarousel
                            projectName={"stool"}
                            images={images.stool}
                            size={390}
                            isHovered={hoveredId === 'stool'}
                            onMouseEnter={handleMouseEnter}
                        />
                        <span className={`${work.className} text-5xl font-medium mt-2`}>stool X</span>
                    </div>
                    <div className={`apartment-cabinet-project flex flex-col`}>
                        <ProjectCarousel
                            projectName={"apartment-cabinet"}
                            images={images.apartmentcabinet}
                            size={550}
                            isHovered={hoveredId === 'apartment-cabinet'}
                            onMouseEnter={handleMouseEnter}
                        />
                        <span className={`inline ${work.className} text-6xl font-medium mt-2`}>apartment cabinet</span>
                    </div>
                    <div className={`stool-project flex flex-col`}>
                        <ProjectCarousel
                            projectName={"chairh"}
                            images={images.chairh}
                            size={400}
                            isHovered={hoveredId === 'chairh'}
                            onMouseEnter={handleMouseEnter}
                        />
                        <span className={`inline ${work.className} text-6xl font-medium mt-2`}>chair h</span>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    );
}
