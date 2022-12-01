import { useEffect, useState } from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
export default function AnimeList() {
    const [data, setData] = useState("")
    const [userText, setUserText] = useState("");
    useEffect(() => {
        const URL = `https://api.jikan.moe/v4/anime?q=${userText}&sfw`;

        fetch(URL)
        .then((response) => response.json())
        .then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    },[URL])

    return (
        <section className="container-list">
            <h2>{userText == ""? "Animes" : `${userText}`}</h2>
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >

            {data === "" ? "Carregando..." :  
                data.map((item) => (

                        <SwiperSlide>

                            <div>
                                <img src={item.images.jpg.large_image_url} alt="Anime Foto" />
                            </div>

                            <div className="anime-description">
                                <span className="anime-title">{item.title}</span>
                            </div>

                            <div className="anime-extra-description">
                                <p>Episódio: {item.episodes}</p>
                                <p className="anime-score">⭐{item.score}</p>
                            </div>
                        </SwiperSlide>

))
}

</Swiper>
</section>
    )
}