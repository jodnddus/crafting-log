'use client'
import Link from 'next/link';
import Image from "next/image";
import images from '@/public/images';

import {MasonryGrid} from "@egjs/react-grid";

export default function ProductPage({params}) {

    return (
        <div className="home w-full px-4 h-screen">
            <div className="header">
                <h1 className="text-6xl border-b-[6px] border-[#171717]">
                    <Link href={{pathname: '/'}}>
                        gagu
                    </Link>
                    :&nbsp;
                    <b className={`font-medium break-words`}>kidschair</b>
                </h1>
            </div>
            <div className="body w-full mt-5">
                <p className="desc font-pretendard text-xl tablet:text-2xl tablet:leading-9 desktop:text-3xl desktop:leading-[3rem] font-medium whitespace-pre-wrap mb-[20px]">
                </p>
                <MasonryGrid
                    className="projects"
                    gap={5}
                    defaultDirection={"end"}
                    align={"justify"}
                >
                    {images.kidschair.map((item, index) => {
                        return (
                            <Image
                                className={`item`}
                                src={item}
                                alt={`stoolx-image-${index + 1}`}
                                placeholder="blur"
                                width={400}
                            />
                        )
                    })}
                </MasonryGrid>
            </div>
        </div>
    );
}