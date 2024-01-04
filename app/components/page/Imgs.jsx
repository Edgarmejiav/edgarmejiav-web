'use client'
import {useEffect, useState} from "react";

export const Imgs = () => {

    const links = [
        "/img/IMG_3801.webp",
        "/img/IMG_2700-Editar.webp",
        "/img/IMG_3917.webp",
        "/img/DSC_2014-Editar.webp",
        "/img/IMG_2789.webp",
        "/img/IMG_8767-min.webp",
        "/img/IMG_8905-min.webp",
        "/img/IMG_3809.webp",
        "/img/IMG_8720-min.webp",
        "/img/IMG_8735-min.webp",
        "/img/IMG_6984-Editar-Editar.webp",
        "/img/IMG_9882-Editar.webp",
        "/img/IMG_8995-min.webp",
        "/img/IMG_2713.webp",
        "/img/IMG_8809-2-min.webp",
        "/img/IMG_3841.webp",
    ];

    const [isMobile, setIsMobile] = useState(() => {
            if (typeof window !== "undefined") {
                return window.innerWidth < 600;
            } else {
                return false;
            }
        }
    );
    const [parts, setParts] = useState([]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsMobile(screenWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const columnCount = isMobile ? 2 : 3;
        const imagesPerPart = Math.floor(links.length / columnCount);

        const newParts = [];

        for (let i = 0; i < columnCount; i++) {
            newParts.push(links.slice(i * imagesPerPart, (i + 1) * imagesPerPart));
        }

        setParts(newParts);
    }, [isMobile]);
    return (
        <div className={` container flex  pt-20 `}>

            {parts.map((part, index) => (
                <div key={index} className="flex flex-1 gap-5  flex-col mx-4 ">
                    {part.map((img, imgIndex) => (
                        <img key={imgIndex} className="max-w-full" src={img} alt={"s"}/>
                    ))}
                </div>
            ))}
        </div>
    );
}
