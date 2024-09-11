import {Header} from "@/app/components/apps/Header";
import {Card} from "@/app/components/apps/Card";
import data from '../../data.json';

export const ConteinerApps = () => {
    const filteredTutorials = data.filter(item => item?.type?.includes('tutorial'))
    const filteredApps = data.filter(item => !item?.type?.includes('tutorial'))
    return (
        <div id="apps">
            <Header/>
            <section
                className=" container mx-auto lg:px-[100px] md:px-[50px]  px-[25px] mt-10 grid xl:grid-cols-2 grid-cols-1  gap-10 ">
                {filteredApps.map((item) => {
                    return <Card key={item.title} {...item} />
                })
                }
            </section>
            <header className="  m-20 flex justify-center  ">
                <h1 className=" bg-gradient-to-br from-blue-900 to-lime-400 text-transparent bg-clip-text
            p-2 md:text-5xl sm:text-3xl  text-2xl font-bold">Tutoriales</h1>
            </header>
            <section
                className=" container mx-auto lg:px-[100px] md:px-[50px]  px-[25px] mt-10 grid xl:grid-cols-2 grid-cols-1  gap-10 ">
                {filteredTutorials.map((item) => {
                    return <Card key={item.title} {...item} />
                })
                }
            </section>

        </div>
    )
}