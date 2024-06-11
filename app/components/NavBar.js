'use client'
import {SocialIcons} from "@/app/components/SocialIcons";
import lega from "../edgar.png";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
    return (
        <nav
            className={' fixed top-0 py-10 backdrop-blur w-full flex  items-center justify-around h-14 text-white text-2xl font-semibold'}
        >
            <div className="flex flex-row gap-4">
                <Image width={36} height={36} className="rounded-full shadow-lg "
                       src={lega?.src} alt={"edgar"}/>

                <div className={"flex gap-4 items-center"}>
                <span
                    className="bg-green-100 h-fit text-green-800 text-xs  font-medium me-2 px-2.5 py-0.5 rounded
                    hover:scale-110 transform transition duration-500 ease-in-out hover:bg-green-200 hover:text-green-900

                    ">
                    <Link href="https://www.linkedin.com/in/legamejiav/" target="_blank">

                    Disponible para trabajar
                    </Link>
                </span>

                </div>
            </div>
            <div className="flex flex-row gap-10">

                <div className="  flex  sm:flex-row sm:gap-10 ">
                    <SocialIcons/>
                </div>
            </div>


        </nav>
    );
};
