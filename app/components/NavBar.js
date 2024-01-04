'use client'
import Link from "next/link";
import {SocialIcons} from "@/app/components/SocialIcons";

export const NavBar = () => {

    return (
        <nav
            className={' fixed top-0 py-10 backdrop-blur w-full flex  items-center justify-around h-14 text-white text-2xl font-semibold'}
        >

            <div>
                <Link href="/">
                    <h1 className="text-xl sm:text-2xl">EdgarMejiaV</h1>
                </Link>
            </div>
            <div className="flex flex-row gap-10">
                <Link href="/photos">
                    <h1 className="text-xl sm:text-sm ">/ Fotos</h1>
                </Link>

                <div className="  flex  sm:flex-row sm:gap-10 ">
                    <SocialIcons/>
                </div>
            </div>


        </nav>
    );
};
