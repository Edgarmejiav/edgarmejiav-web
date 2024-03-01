import Link from "next/link";
import {IconGithub} from "@/app/components/icons/IconGithub";
import {IconLinkedin} from "@/app/components/icons/IconLinkedin";
import {IconX} from "@/app/components/icons/IconX";

export const SocialIcons = () => {
    return <div
        className="flex items-center justify-center space-x-5 border-neutral-700 md:mt-0 md:border-l md:pl-6">
        <Link
            href="https://twitter.com/legamejiav" target="_blank" aria-label="link to x">
          <IconX />
        </Link>
        <Link href="https://www.linkedin.com/in/legamejiav/" target="_blank" aria-label="link to linkedin">
           <IconLinkedin/>
        </Link>
        <Link href="https://github.com/edgarmejiav" target="_blank" aria-label="link to github">
            <IconGithub />

        </Link>
        <Link href="https://github.com/Edgarmejiav/edgarmejiav-web" target="_blank" aria-label="link to github">
            <IconGithub />
        </Link>

    </div>
}
