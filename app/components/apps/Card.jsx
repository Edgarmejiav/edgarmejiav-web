import Link from "next/link";
import {IconsCode} from "@/app/components/icons/IconsCode";
import {IconLinkArrow} from "@/app/components/icons/IconLinkArrow";
import {IconYoutube} from "@/app/components/icons/IconYoutube";


export const Card = ({title, description, link, stack, github, youtube}) => {
    return (
        <>
            <div
                className="text-white flex  items-center  border border-neutral-800 rounded-lg  p-5  ">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold ">{title} </h2>
                        <div className="flex self-start gap-4  ">
                            <Link href={link} target="_blank">
                                <IconLinkArrow/>
                            </Link>
                            {github && <Link href={github} target="_blank">

                                <IconsCode/>
                            </Link>}
                            {youtube && <Link href={youtube} target="_blank">

                                <IconYoutube/>
                            </Link>}
                        </div>
                    </div>
                    <h3 className="text-xl text-gray-400">{description}</h3>
                    <div className="flex flex-row items-center gap-4 flex-wrap">
                        {stack.map((item) => <span key={item}
                                                   className=" truncate rounded-md border  border-gray-500 px-2 py-1 sm:text-xl text-sm ">{item}</span>)}
                    </div>
                </div>


            </div>

        </>
    )
}
