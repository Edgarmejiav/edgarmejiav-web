import Image from "next/image";

export const Card = ({title, description, img, link}) => {
    return (
        <div className="flex flex-row  items-center border border-gray-500 bg-gray-800 rounded-lg sm:p-10 p-3  ">

            <img  className=" mr-8 sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]"  src={`https://sindresorhus.com/apps/day-progress/icon.png`}

                 alt={"icon"}/>
            <div className="flex flex-col gap-5">
                <h1 className=" md:text-3xl text-2xl font-bold ">Day Progress</h1>
                <p className=" md:text-xl  text-xl text-gray-300">Time remaining today in your menu bar</p>
                <div className="flex flex-row flex-row  items-center gap-4">
                    <div
                        className="center  inline-block select-none whitespace-nowrap rounded-lg bg-pink-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                        chip
                    </div>
                    <div
                        className="center  inline-block select-none whitespace-nowrap rounded-lg bg-pink-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                        chip
                    </div>
                </div>
            </div>


        </div>)
}