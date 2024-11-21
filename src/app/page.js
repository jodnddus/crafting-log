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
        <div className="w-full h-screen desktop:py-[20px]">
            <div className="px-[20px] py-[10px] desktop:px-[50px] desktop:px-[30px] desktop:max-w-[920px] flex flex-col gap-[20px] mx-[auto]">
                <h1 className={`header text-[30px] desktop:text-[50px] font-bold leading-[140%]`}>woongyeon’s gagu<br/>magazine</h1>
                <hr className="border-[1.5px] border-[#171717]" />
                <div className="body">
                    <div className="projects flex flex-row flex-wrap gap-[20px]">
                        <div className={`stool-project flex flex-col w-[100px] desktop:w-[200px]`}>
                            <Link href={{pathname: '/product/stoolx'}}>
                                <ProjectCarousel
                                    projectName={"stool"}
                                    images={images.stool.slice(0, 3)}
                                    handleOnClick={handleOnClick}
                                />
                            </Link>
                            <span className={`text-[17px] desktop:text-[30px] font-normal mt-2`}>stool X</span>
                        </div>
                        <div className={`apartment-cabinet-project flex flex-col w-[200px] desktop:w-[400px]`}>
                            <Link href={{pathname: '/product/apartmentcabinet'}}>
                                <ProjectCarousel
                                    projectName={"apartment-cabinet"}
                                    images={images.apartmentcabinet}
                                    handleOnClick={handleOnClick}
                                />
                            </Link>
                            <span className={`inline text-[17px] desktop:text-[30px] font-normal mt-2`}>apartment cabinet</span>
                        </div>
                        <div className={`stool-project flex flex-col w-[130px] desktop:w-[360px]`}>
                            <Link href={{pathname: '/product/chairh'}}>
                                <ProjectCarousel
                                    projectName={"chairh"}
                                    images={images.chairh}
                                    handleOnClick={handleOnClick}
                                />
                            </Link>
                            <span className={`inline text-[17px] desktop:text-[30px] font-normal mt-2`}>chair h</span>
                        </div>
                        <div className={`stool-project flex flex-col w-[130px] desktop:w-[360px]`}>
                            <Link href={{pathname: '/product/kidschair'}}>
                                <ProjectCarousel
                                    projectName={"chairh"}
                                    images={images.kidschair.slice(0, 3)}
                                    handleOnClick={handleOnClick}
                                />
                            </Link>
                            <span className={`inline text-[17px] desktop:text-[30px] font-normal mt-2`}>kidschair</span>
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>

        </div>
    );
}
