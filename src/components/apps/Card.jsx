import Image from "next/image";
import Link from "next/link";

export const Card = ({title, description, img, link, stack}) => {
    return (
        <Link href={link} target="_blank">

            <div className="flex flex-row  items-center border border-gray-500 bg-gray-800 rounded-lg sm:p-10 p-3  ">
                {/*<Image className=" mr-8 sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]"*/}
                {/*       src={`${img ? img : "https://sindresorhus.com/apps/day-progress/icon.png"}`}*/}
                {/*/>*/}
                <img className=" mr-8 sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]"
                     src={`${img ? img : "https://sindresorhus.com/apps/day-progress/icon.png"}`}

                     alt={"icon"}/>
                <div className="flex flex-col gap-5">
                    <h1 className=" md:text-3xl text-2xl font-bold ">{title}</h1>
                    <p className=" md:text-xl  text-xl text-gray-300">{description}</p>
                    <div className="flex flex-row flex-row  items-center gap-4">
                        {/*{*/}
                        {/*    ["react", "vue", "mongo"].map((item, index) => {*/}
                        {/*        return <div key={index}*/}
                        {/*                    className="center  inline-block select-none whitespace-nowrap rounded-lg bg-pink-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">*/}
                        {/*            {item}*/}
                        {/*        </div>*/}
                        {/*    })*/}
                        {/*}*/}
                        <h1 className="font-bold text-xl">

                            {stack.join(" | ")}
                        </h1>

                    </div>
                </div>


            </div>
        </Link>
    )
}