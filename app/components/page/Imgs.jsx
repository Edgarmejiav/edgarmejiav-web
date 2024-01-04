export const Imgs = () => {

    const links = [
        "https://images.pexels.com/photos/13235825/pexels-photo-13235825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18530726/pexels-photo-18530726/free-photo-of-chica-pelirroja-con-un-vestido-vintage-verde-con-uvas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18597865/pexels-photo-18597865/free-photo-of-ligero-ciudad-amanecer-gente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5372612/pexels-photo-5372612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18201338/pexels-photo-18201338/free-photo-of-mujer-rock-retrato-pelo-largo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/17916576/pexels-photo-17916576/free-photo-of-escaleras-ciudad-puesta-de-sol-pasos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/17937239/pexels-photo-17937239/free-photo-of-mujer-en-pie-oscuridad-vestido-blanco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10497155/pexels-photo-10497155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18072294/pexels-photo-18072294/free-photo-of-mujer-noche-en-pie-urbano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    const imagesPerPart = Math.ceil(links.length / 3);

    const parts = [];
    for (let i = 0; i < 3; i++) {
        parts.push(links.slice(i * imagesPerPart, (i + 1) * imagesPerPart));
    }

    return (
        <div className="flex gap-10 pt-20">
            {parts.map((part, index) => (
                <div key={index} className="flex flex-col gap-10">
                    {part.map((img, imgIndex) => (
                        <img key={imgIndex} className="max-w-full" src={img} alt={"s"}/>
                    ))}
                </div>
            ))}
        </div>
    );
}
