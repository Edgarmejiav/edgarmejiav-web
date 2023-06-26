import {Header} from "@/components/apps/Header";
import {Card} from "@/components/apps/Card";
import data from '@/data.json';

export const ConteinerApps = () => {
    return (
        <>
            <Header/>

            <section
                className=" container mx-auto lg:px-[100px] md:px-[50px]  px-[25px] mt-10 grid xl:grid-cols-2 grid-cols-1  gap-10 ">
                {data.map((item, index) => {
                    return <Card key={index} {...item} />
                })
                }
            </section>
        </>
    )
}