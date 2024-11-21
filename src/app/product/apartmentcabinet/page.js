import Link from 'next/link';
import Image from "next/image";
import images from '@/public/images';


export default function ProductPage({params}) {

    return (
        <div className="w-full h-screen desktop:py-[20px]">
            <div
                className={`px-[20px] py-[10px] desktop:px-[50px] desktop:px-[30px] desktop:max-w-[920px] flex flex-col gap-[20px] mx-[auto]`}>
                <h1 className="header text-[30px] desktop:text-[50px] font-bold leading-[140%] flex items-center">
                    <Image
                        src={images.apartmentcabinet[0]}
                        alt={`title-image`}
                        aria-hidden
                        placeholder="blur"
                        height={70}
                        className={`rounded-[3px] mr-[20px]`}
                    />
                    apartment cabinet
                </h1>
                <hr className="border-[1.5px] border-[#171717]"/>
                <p className="desc font-pretendard text-[14px] tablet:text-2xl tablet:leading-9 desktop:text-[16px] desktop:leading-[140%] font-medium whitespace-pre-wrap">
                </p>
                <b className={`desktop:text-[16px] desktop:leading-[140%] font-extrabold`}>cabinet, plywood, cherry
                    veneer, 24 summer </b>
                <div
                    className="projects flex flex-row flex-wrap justify-center tablet:justify-start desktop:justify-start gap-[10px]">
                    <Image
                        src={images.apartmentcabinet[0]}
                        alt={`apartmentcabinet-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.apartmentcabinet[1]}
                        alt={`apartmentcabinet-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.apartmentcabinet[2]}
                        alt={`apartmentcabinet-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.apartmentcabinet[3]}
                        alt={`apartmentcabinet-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[400px]`}
                    />
                </div>
            </div>
        </div>
    );
}