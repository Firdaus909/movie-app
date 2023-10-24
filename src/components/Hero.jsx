import React, { useEffect, useRef, useState } from "react";
import { Button, Carousel, Flex, Skeleton } from "antd";
import { getTrending } from "../services/services";

const Hero = () => {
  const imgUrl = import.meta.env.VITE_IMAGE_URL;
  
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  const goTo = (slide) => {
    slideRef.current.goTo(slide, false);
  };

  const getTrendingToday = async () => {
    setLoading(true);
    const { data } = await getTrending();
    setMovies(data.results.slice(0, 5));
    setLoading(false);
  };

  useEffect(() => {
    getTrendingToday();
  }, []);

  return (
    <Flex className="relative">
      {loading ? (
        <div className="mx-auto">
          <Skeleton.Image active style={{ width: "1000px", height: "500px" }} />
        </div>
      ) : (
        <div className="w-full mx-auto">
          <Carousel
            ref={slideRef}
            dots={false}
            autoplay
            autoplaySpeed={5000}
            swipeToSlide
            draggable
            afterChange={(curr) => setCurrentSlide(curr)}>
            {movies.map((movie) => (
              <img
                key={movie.id}
                src={`${imgUrl}${movie.backdrop_path}`}
                alt="banner"
              />
            ))}
          </Carousel>
          <Flex className="absolute carousel-dots-wrapper">
            {Array.from(Array(movies.length), (e, i) => (
              <Button
                key={i}
                onClick={() => {
                  goTo(i);
                  setCurrentSlide(i);
                }}
                className="carousel-dots-item"
                style={{
                  backgroundColor: currentSlide == i ? "white" : "transparent",
                }}
              />
            ))}
          </Flex>
        </div>
      )}
    </Flex>
  );
};

export default Hero;
