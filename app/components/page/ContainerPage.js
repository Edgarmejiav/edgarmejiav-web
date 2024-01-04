import Link from "next/link";

export const ContainerPage = () => {
    return (
        <div className="flex flex-col items-center justify-center sm:min-h-screen  min-h-[60vh]  gap-7  ">
            <h1 className="
             bg-gradient-to-br from-blue-900 to-lime-400
             text-transparent
             bg-clip-text
            p-2
            sm:text-6xl
            font-center
            text-4xl
             font-bold
            ">EdgarMejiaV</h1>
            <h1 className="sm:text-3xl text-1xl   font-bold text-slate-300">Software engineer & web Developer </h1>

            <div className="text-white flex flex-row gap-10">
                <button className=" flex items-center gap-2 border border-neutral-800 p-3 rounded-2xl font-bold   ">
                    <Link
                        className="flex items-center sm:p-2 p-1 sm:text-[20px] text-xs scroll-smooth hover:scroll-auto"
                        href="#apps">
                        Aplicaciones
                    </Link>
                </button>
                <button className=" flex items-center gap-2 border border-neutral-800 p-3 rounded-2xl font-bold   ">
                    <Link className="flex items-center sm:p-2 p-1 sm:text-[20px] text-xs " target="_blank"
                          href="https://github.com/Edgarmejiav">
                        Github
                    </Link>
                </button>
            </div>
        </div>
    )
}


