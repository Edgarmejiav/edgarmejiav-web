import Link from "next/link";


export const Card = ({title, description, link, stack, github}) => {
    return (
        <>
            <div
                className="text-white flex  items-center  border border-neutral-800 rounded-lg  p-5  ">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">

                        <h3 className="  text-2xl font-bold ">{title} </h3>
                        <div className="flex self-start gap-4  ">
                            <Link href={link} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                                </svg>
                            </Link>
                            { github && <Link href={github} target="_blank">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                                </svg>
                            </Link>}

                        </div>
                    </div>
                    <p className="  text-xl text-gray-500">{description}</p>
                    <div className="flex flex-row flex-row  items-center gap-4">
                        {stack.map((item) =>  <h1  key={item} className=" truncate rounded-md border  border-gray-500 px-2 py-1 sm:text-xl text-sm ">{item}</h1>)}
                    </div>
                </div>


            </div>

        </>
    )
}
