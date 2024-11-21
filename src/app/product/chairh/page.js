import Link from 'next/link';
import Image from "next/image";
import images from '@/public/images';


export default function ProductPage({params}) {

    return (
        <div className="w-full h-screen desktop:py-[20px]">
            <div
                className={`px-[20px] py-[10px] desktop:px-[50px] desktop:px-[30px] desktop:max-w-[920px] flex flex-col gap-[20px] mx-[auto]`}>
                <h1 className="header text-[30px] desktop:text-[50px] font-bold leading-[140%] flex">
                    <Image
                        src={images.chairh[2]}
                        alt={`title-image`}
                        aria-hidden
                        placeholder="blur"
                        height={70}
                        className={`rounded-[3px] mr-[20px]`}
                    />
                    chair h
                </h1>
                <hr className="border-[1.5px] border-[#171717]"/>
                <pre className="desc font-pretendard text-xl tablet:text-[14px] tablet:leading-[120%] desktop:text-[16px] desktop:leading-[140%] font-medium whitespace-pre-wrap">
                    밴딩은 나무로 곡선을 만드는 방법 중 하나입니다. 시간이 오래 걸리지만 깎아서 만드는 방법보다 튼튼하다는 장점이 있습니다.
                    밴딩으로 만들어진 라인을 따라 눕듯이 앉으면 허리를 쭉 펼수 있습니다. 좌판 앞쪽에 자리한 곡면은 오금을 받쳐주기 때문에 조금 더 편안한 느낌을 받을 수 있습니다.
                    <br/>
                    <br/>
                    여름에 만들어진 이 의자는 보다 더 시원한 느낌을 주기 위해 <i>모노코트 틸 블루(54)</i>를 사용해 도장했습니다.
                </pre>
                <b className={`desktop:text-[16px] desktop:leading-[140%] font-extrabold`}>chair, ash, monocoat, 24 summer</b>
                <div
                    className="projects flex flex-row flex-wrap justify-center tablet:justify-start desktop:justify-start gap-[10px]">
                    <Image
                        src={images.chairh[0]}
                        alt={`apartmentcabinet-image-0`}
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.chairh[1]}
                        alt={`chairh-image-0`}
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.chairh[2]}
                        alt={`chairh-image-0`}
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.chairh[3]}
                        alt={`chairh-image-0`}
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.chairh[4]}
                        alt={`chairh-image-0`}
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.chairh[5]}
                        alt={`chairh-image-0`}
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.chairh[6]}
                        alt={`chairh-image-0`}
                        className={`w-full desktop:w-[400px]`}
                    />
                    <Image
                        src={images.chairh[7]}
                        alt={`chairh-image-0`}
                        className={`w-full desktop:w-[400px]`}
                    />
                </div>
            </div>
        </div>
    );
}