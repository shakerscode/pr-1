import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpeg";
import AVTR2 from "../../assets/avatar2.jpeg";
import AVTR3 from "../../assets/avatar3.jpeg";
import AVTR4 from "../../assets/avatar4.jpeg";

import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Robert Lee</h5>
          <small className="client__review">
            Awesome job Vitaliy. Always hard working! Could see your product
            being used by restaurants worldwide.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="" />
          </div>
          <h5 className="client__name">Marco Korcak</h5>
          <small className="client__review">Great presentation</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="" />
          </div>
          <h5 className="client__name">Farzana Ruzehaji </h5>
          <small className="client__review">
            Excellent project and presentation!! So proud of you
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="" />
          </div>
          <h5 className="client__name">Khadijah Akter</h5>
          <small className="client__review">
            An amazing presentation and project!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
