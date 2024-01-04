'use client'
import {ContainerPage} from "@/app/components/page/ContainerPage";
import {Technologies} from "@/app/components/Technologies";
import {ConteinerApps} from "@/app/components/apps/ConteinerApps";

export default function Home() {
    return (
        <>

            <main>
                <ContainerPage   />
                <Technologies/>
                <ConteinerApps  />
            </main>
        </>
    )
}
