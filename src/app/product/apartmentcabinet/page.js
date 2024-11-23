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
                    아파트는 다양한 것을 담는 일종의 캐비넷이라는 생각이 문득 들었습니다. 건물모양 캐비넷을 만들기로 하고, 디자인 단계에서 건물요소들을 가구요소로 해석해봤습니다.
                    <br/>
                    <br/>
                    오른쪽 선반은 짧막한 책이나 화장품, 여러 잡동사니를 보관할 수 있고, 상단 서랍은 깊이가 깊어서 카메라, 헤드셋 같은 것들을 보관할 수 있습니다. 아래에는 짧막한 다리를 붙혀 평을 잡고, 동시에 필로티 구조를 묘사했습니다.
                </p>
                <b className={`desktop:text-[16px] desktop:leading-[140%] font-extrabold`}>cabinet, plywood, cherry
                    veneer, 24 summer </b>
                <div
                    className="projects flex flex-row flex-wrap justify-center tablet:justify-start desktop:justify-start gap-[10px]">
                    <Image
                        src={images.apartmentcabinet[3]}
                        alt={`apartmentcabinet-image-0`}
                        placeholder="blur"
                        className={`w-full`}
                    />
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
                </div>
            </div>
        </div>
    );
}