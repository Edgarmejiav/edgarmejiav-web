'use client'
import {SocialIcons} from "@/app/components/SocialIcons";

export const NavBar = () => {

    return (
        <nav
            className={' fixed top-0 py-10 backdrop-blur w-full flex  items-center justify-around h-14 text-white text-2xl font-semibold'}
        >

            <div className={"flex gap-4 items-center"}>
                <span
                    className="bg-green-100 h-fit text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300
                    hover:scale-110 transform transition duration-500 ease-in-out hover:bg-green-200 hover:text-green-900
                    ">
                    <a href="https://www.linkedin.com/in/legamejiav/" target="_blank">

                    Disponible para trabajar
                    </a>
                </span>

            </div>
            <div className="flex flex-row gap-10">

                <div className="  flex  sm:flex-row sm:gap-10 ">
                    <SocialIcons/>
                </div>
            </div>


        </nav>
    );
};
