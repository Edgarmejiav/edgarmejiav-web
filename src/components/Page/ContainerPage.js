import Link from "next/link";
import {IconApps , IconGithub} from "@/components/Icons";

export const ContainerPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  gap-7">
            <h1 className="
             bg-gradient-to-br from-blue-900 to-lime-400
             text-transparent
             bg-clip-text
            p-2 text-6xl font-bold">EdgarMejiaV</h1>
            <h1 className="text-3xl font-bold text-slate-300">Software engineer | Front-end Developer | Python Developer</h1>

            <div className="flex flex-row gap-10">
                <button className=" flex bg-gray-700 p-3 rounded-2xl font-bold   ">
                    <Link className="flex" href="/apps">
                        <IconApps/>
                        Aplicaciones
                    </Link>
                </button>
                <button className="  bg-gray-700 p-3 rounded-2xl font-bold  ">
                    <Link className="flex" target="_blank" href="https://github.com/Edgarmejiav">
                        <IconGithub/>
                        Código
                    </Link>
                </button>
            </div>
        </div>
    )
}


