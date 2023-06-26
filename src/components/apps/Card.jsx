import Image from "next/image";

export const Card = ({title, description, img, link}) => {
    return (
        <div className="flex flex-row  items-center border border-gray-500 bg-gray-800 rounded-lg p-10  ">

            <img  className="mr-8" src={`https://sindresorhus.com/apps/day-progress/icon.png`}
                 width={"100"}
                 height={"100"}
                 alt={"icon"}/>
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">Day Progress</h1>
                <p className="text-xl text-gray-300">Time remaining today in your menu bar</p>
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