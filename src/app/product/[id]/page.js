'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

export default function ProductPage({params}) {
    const searchParams = useSearchParams()

    console.log(searchParams.get('title'))

    return(
        <div className="home w-full px-4 h-screen">
            <div>
                <div className="header">
                    <h1 className="text-6xl border-b-[12px] border-[#171717]">
                        <Link href={{
                            pathname: '/',
                        }}>
                            gagu
                        </Link>
                        &nbsp;&gt;&nbsp;
                        {searchParams.get('title')}
                    </h1>
                </div>
            </div>
        </div>
    );
}