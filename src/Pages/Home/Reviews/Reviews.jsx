import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Container from "../../../Componentss/Container";

import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css/pagination";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://dream-college-server-kappa.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-8 bg-gray-100 p-3 rounded shadow">
      <Container>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-blue-800">{review.name}</h3>

                <Rating
                  style={{ maxWidth: 80 }}
                  value={review.rating}
                  readOnly
                  className="my-3"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Reviews;
