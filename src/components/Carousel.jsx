import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard.jsx";

export default function Carousel({ items = [], title }) {
  if (items.length !== 0) {
    return (
      <section>
        <h2>{title}</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={12}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
}
