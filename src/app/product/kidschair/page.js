'use client'
import Link from 'next/link';
import Image from "next/image";
import images from '@/public/images';

import {MasonryGrid} from "@egjs/react-grid";

export default function ProductPage({params}) {

    return (
        <div className="w-full h-screen desktop:py-[20px]">
            <div
                className={`px-[20px] py-[10px] desktop:px-[50px] desktop:px-[30px] desktop:max-w-[920px] flex flex-col gap-[20px] mx-[auto]`}>

                <h1 className="header text-[30px] desktop:text-[50px] font-bold leading-[140%] flex">
                    <Image
                        src={images.kidschair[3]}
                        alt={`title-image`}
                        aria-hidden
                        placeholder="blur"
                        height={70}
                        className={`rounded-[3px] mr-[20px]`}
                    />
                    kidschair
                </h1>
                <hr className="border-[1.5px] border-[#171717]"/>
                <p className="desc font-pretendard text-xl tablet:text-2xl tablet:leading-9 desktop:text-[16px] desktop:leading-[140%] font-medium whitespace-pre-wrap">
                    등판, 좌판, 옆판 2개로 이루어진 총 4개의 구성요소들을 6개의 볼트로 쉽게 결합하는 아동용 의자입니다. 유치원에서 볼법한 의자들이 가지고있는 굵은 두께감에서 영감을 받아 디자인 되었습니다.
                </p>
                <b className={`desktop:text-[16px] desktop:leading-[140%] font-extrabold`}>chair, cherry, bolt, 24
                    spring</b>
                <div
                    className="projects flex flex-row flex-wrap justify-center tablet:justify-start desktop:justify-start gap-[10px]">
                    <Image
                        src={images.kidschair[0]}
                        alt={`kidschair-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[250px]`}
                    />
                    <Image
                        src={images.kidschair[1]}
                        alt={`kidschair-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[250px]`}
                    />
                    <Image
                        src={images.kidschair[2]}
                        alt={`kidschair-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[250px]`}
                    />
                    <Image
                        src={images.kidschair[4]}
                        alt={`kidschair-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.kidschair[5]}
                        alt={`kidschair-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.kidschair[8]}
                        alt={`kidschair-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.kidschair[10]}
                        alt={`kidschair-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.kidschair[11]}
                        alt={`kidschair-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[400px]`}
                    />
                </div>
            </div>
        </div>
    );
}