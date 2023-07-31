'use client'
import {ContainerPage} from "@/components/page/ContainerPage";
import {Technologies} from "@/components/Technologies";
import {ConteinerApps} from "@/components/apps/ConteinerApps";

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
