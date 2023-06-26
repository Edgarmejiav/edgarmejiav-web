import Link from "next/link";
import {IconGithub} from "@/components/Icons";
import {IconInstagram} from "@/components/Icons/IconInstagram";
import {IconLinkedin} from "@/components/Icons/IconLinkedin";

export const Footer = () => {

    return (
        <footer
            className="border-t border-gray-200 dark:border-slate-800 mt-20 py-10 flex justify-around">

            <span className="hidden md:inline text-xs text-gray-700 mr-4 dark:text-slate-400">
              <q>
                    Cambiar el mundo a través del código
              </q>
            </span>
            <div className="flex items-center gap-4">
                <Link href="https://github.com/Edgarmejiav">
                    <IconGithub/>
                </Link>
                <Link href="https://www.instagram.com/edgarmejiav/">
                    <IconInstagram/>
                </Link>
                <Link href="https://www.linkedin.com/in/edgarmejiav/">
                    <IconLinkedin/>
                </Link>
            </div>
        </footer>
    )
}
