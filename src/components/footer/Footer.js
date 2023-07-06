import Link from "next/link";

export const Footer = () => {

    return (
        <footer
            className="border-t border-gray-200 dark:border-slate-800 mt-20 py-10 flex justify-around">

            <span className="hidden md:inline text-sm text-gray-700 mr-4 dark:text-slate-400">
              <q>
                    Cambiar el mundo a través del código
              </q>
            </span>
            <div className="text-white flex items-center gap-4 ">
                <Link href="https://github.com/Edgarmejiav">
                    GitHub
                    {/*<IconGithub/>*/}
                </Link>
                <Link href="https://www.instagram.com/edgarmejiav/">
                    Instagram
                    {/*<IconInstagram/>*/}
                </Link>
                <Link href="https://www.linkedin.com/in/edgarmejiav/">
                    Linkedin
                    {/*<IconLinkedin/>*/}
                </Link>
            </div>
        </footer>
    )
}
