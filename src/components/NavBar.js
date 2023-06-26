// create headr component with tailwind css
import Link from "next/link";

export const NavBar = () => {
    return (
        <div
            className="fixed top-0 py-10 backdrop-blur  w-full flex justify-center items-center justify-around  h-14  text-white text-2xl font-semibold">
            <div>
                <Link href="/"  >
                <h1>EdgarMejiaV</h1>
                </Link>
            </div>
            <div className="flex gap-10  ">
                <Link href={"/apps"}>
                <h1>Apps</h1>
                </Link>
                    <Link href="/about"  >
                <h1>Acerca de</h1>
                    </Link>
            </div>

        </div>
    )
}