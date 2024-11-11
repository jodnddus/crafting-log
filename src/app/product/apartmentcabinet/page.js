import Link from 'next/link';
import Image from "next/image";
import images from '@/public/images';


export default function ProductPage({params}) {

    return (
        <div className="home w-full px-4 h-screen">
            <div className="header">
                <h1 className="text-6xl border-b-[6px] border-[#171717]">
                    <Link href={{ pathname: '/' }}>
                        gagu
                    </Link>
                    :&nbsp;
                    <b className={`font-medium break-words`}>apartment cabinet</b>
                </h1>
            </div>
            <div className="body w-full mt-5">
                <p className="desc font-pretendard text-xl tablet:text-2xl tablet:leading-9 desktop:text-3xl desktop:leading-[3rem] font-medium whitespace-pre-wrap mb-[20px]">
                </p>
                <div className="projects flex flex-row flex-wrap justify-center tablet:justify-start desktop:justify-start gap-6">
                    {images.apartmentcabinet.map((item, index) => {
                        return (
                            <div className={`max-w-[300px] tablet:w-[400px] desktop:w-[500px]`}>
                                <Image
                                    src={item}
                                    alt={`apartmentcabinet-image-${index + 1}`}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}