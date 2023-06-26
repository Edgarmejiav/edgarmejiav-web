import {Header} from "@/components/apps/Header";
import {Card} from "@/components/apps/Card";

export const ConteinerApps = () => {
    return (
        <>
            <Header/>
            <div className="">

            <section className=" container mx-auto px-[100px]  mt-10 grid grid-cols-2 gap-10 ">

                <Card description={"Day Progress"} link={"sfd"} img={"df"} title={"dfgbg"}/>
                <Card description={"className"} link={"sfd"} img={"df"} title={"dfgbg"}/>
                <Card description={"className"} link={"sfd"} img={"df"} title={"dfgbg"}/>
                <Card description={"className"} link={"sfd"} img={"df"} title={"dfgbg"}/>
                <Card description={"className"} link={"sfd"} img={"df"} title={"dfgbg"}/>
                <Card description={"className"} link={"sfd"} img={"df"} title={"dfgbg"}/>
                <Card description={"className"} link={"sfd"} img={"df"} title={"dfgbg"}/>
                <Card description={"className"} link={"sfd"} img={"df"} title={"dfgbg"}/>
            </section>
            </div>
        </>
    )
}