import Link from 'next/link';
import Image from "next/image";
import images from '@/public/images';

export default function ProductPage({params}) {

    return (
        <div className="w-full h-screen desktop:py-[20px]">
            <div className={`px-[20px] py-[10px] desktop:px-[50px] desktop:px-[30px] desktop:max-w-[920px] flex flex-col gap-[20px] mx-[auto]`}>
                <h1 className="header text-[30px] desktop:text-[50px] font-bold leading-[140%] flex items-center">
                    <Image
                        src={images.stool[1]}
                        alt={`title-image`}
                        aria-hidden
                        placeholder="blur"
                        height={70}
                        className={`rounded-[3px] mr-[20px]`}
                    />
                    stool X
                </h1>
                <hr className="border-[1.5px] border-[#171717]"/>
                <p className="desc font-pretendard text-[14px] tablet:text-2xl tablet:leading-9 desktop:text-[16px] desktop:leading-[140%] font-medium whitespace-pre-wrap">
                    십자 모양 보강대와 40mm의 두꺼운 다리가 특징인 스툴입니다. 귀여운 느낌이 연출되도록, 다리를 0.5도 이중으로 기울였습니다. 보강대는 두꺼운 다리들을 붙잡을 뿐만 아니라,
                    작은 물건들을 올려둘 수 있는 기능적인 역할도 수행합니다.
                </p>
                <b className={`desktop:text-[16px] desktop:leading-[140%] font-extrabold`}>stool, white oak, 24 summer</b>
                <div className="projects flex flex-row flex-wrap justify-center tablet:justify-start desktop:justify-start gap-[10px]">
                    <Image
                        src={images.stool[0]}
                        alt={`stoolx-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[250px]`}
                    />
                    <Image
                        src={images.stool[1]}
                        alt={`stoolx-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[250px]`}
                    />
                    <Image
                        src={images.stool[2]}
                        alt={`stoolx-image-0`}
                        placeholder="blur"
                        className={`w-full desktop:w-[250px]`}
                    />
                    <Image
                        src={images.stool[3]}
                        alt={`stoolx-image-0`}
                        placeholder="blur"
                        height={320}
                    />
                    <Image
                        src={images.stool[4]}
                        alt={`stoolx-image-0`}
                        placeholder="blur"
                        width={820}
                    />
                </div>
            </div>
        </div>
    );
}