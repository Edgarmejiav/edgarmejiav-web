import Link from "next/link";

export const ContainerPage = () => {
    return (<div className="flex flex-col items-center justify-center   min-h-[60vh]  gap-7  ">
        <h2 className="
             bg-gradient-to-br from-blue-900 to-lime-400
             text-transparent
             bg-clip-text
            p-2
            sm:text-6xl
            font-center
            text-4xl
             font-bold
            ">EdgarMejiaV</h2>
        <h1 className="sm:text-2xl text-1xl w-1/2 text-slate-300 [&>strong]:font-bold "> +3 años de
            experiencia. <strong> Ingeniero de
                sistemas de Cajamarca, perú 🇵🇪. </strong> Especializado en el desarrollo de aplicaciones web. </h1>

        <div className="text-white flex flex-row gap-4">
            <button className=" flex items-center gap-2 border border-neutral-800 p-3 rounded-2xl font-bold hover:bg-neutral-800 hover:text-white
                   ">
                <Link
                    className="flex items-center sm:p-2 p-1 sm:text-[20px] text-sm scroll-smooth hover:scroll-auto"
                    href="mailto:legamejiav@gmail.com">
                    Contáctame
                </Link>
            </button>
            <button className=" flex items-center gap-2 border border-neutral-800 p-3 rounded-2xl font-bold hover:bg-neutral-800 hover:text-white
                   ">
                <Link className="flex items-center sm:p-2 p-1 sm:text-[20px] text-sm  scroll-smooth hover:scroll-auto"
                      target="_blank"
                      href="https://www.linkedin.com/in/legamejiav/">
                    LinkedIn
                </Link>
            </button>
        </div>
    </div>)
}


