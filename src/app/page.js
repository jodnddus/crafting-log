'use client'
import {useState} from "react";
import {Work_Sans} from 'next/font/google';
import Link from 'next/link'

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
                    <h1 className="text-6xl border-b-[6px] border-[#171717]">gagu</h1>
                </div>
                <div className="body w-full mt-5">
                    <div className="projects flex flex-row flex-wrap gap-6">
                        <div className={`stool-project flex flex-col w-[100px] desktop:w-[200px]`}>
                            <Link href={{ pathname: '/product/stoolx' }}>
                                <ProjectCarousel
                                    projectName={"stool"}
                                    images={images.stool}
                                    handleOnClick={handleOnClick}
                                />
                            </Link>
                            <span className={`${work.className} text-3xl font-medium mt-2`}>stool X</span>
                        </div>
                        <div className={`apartment-cabinet-project flex flex-col w-[200px] desktop:w-[400px]`}>
                            <Link href={{ pathname: '/product/apartmentcabinet' }}>
                                <ProjectCarousel
                                    projectName={"apartment-cabinet"}
                                    images={images.apartmentcabinet}
                                    handleOnClick={handleOnClick}
                                />
                            </Link>
                            <span className={`inline ${work.className} text-4xl font-medium mt-2`}>apartment cabinet</span>
                        </div>
                        <div className={`stool-project flex flex-col w-[130px] desktop:w-[360px]`}>
                            <Link href={{ pathname: '/product/chairh' }}>
                                <ProjectCarousel
                                    projectName={"chairh"}
                                    images={images.chairh}
                                    handleOnClick={handleOnClick}
                                />
                            </Link>
                            <span className={`inline ${work.className} text-4xl font-medium mt-2`}>chair h</span>
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>

        </div>
    );
}
