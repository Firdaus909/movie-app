import React, { useEffect, useState } from "react";
import {
  Flex,
  Tag,
  Space,
  Typography,
  Row,
  Col,
  Skeleton,
  Pagination,
  Empty,
} from "antd";
import { getGenre, getMovies, getMoviesByGenres } from "../services/services";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

import "../assets/css/Homepage.css";
import EmptyImg from "../assets/image/Empty.jpg";

const Homepage = () => {
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState({});

  const [movieLoading, setMovieLoading] = useState(false);
  const [genreLoading, setGenreLoading] = useState(false);

  const getAllGenre = async () => {
    setGenreLoading(true);
    const { data } = await getGenre();
    setGenres(data.genres);
    setGenreLoading(false);
  };

  const fetchMovieByGenre = async () => {
    if (selectedGenres.length !== 0) {
      setMovieLoading(true);
      const { data } = await getMoviesByGenres(selectedGenres.join(","), page);
      setMovieByGenre(data);
      setMovieLoading(false);
    } else {
      setMovieLoading(true);
      const { data } = await getMovies(page);
      setMovieByGenre(data);
      setMovieLoading(false);
    }
  };

  const handleGenre = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedGenres, tag]
      : selectedGenres.filter((t) => t !== tag);
    setSelectedGenres(nextSelectedTags);
  };

  useEffect(() => {
    getAllGenre();
  }, []);

  useEffect(() => {
    fetchMovieByGenre();
  }, [selectedGenres, page]);

  return (
    <div className="mx-auto w-full">
      <Navbar />
      <Hero />
      <Flex vertical className="genre-section">
        {genreLoading ? (
          <>
            <Skeleton active style={{ marginBottom: "1rem" }} />
          </>
        ) : (
          <>
            <Typography.Title level={2} className="genre-section-title">
              Browse by category
            </Typography.Title>
            <Space wrap className="genre-tag-wrapper">
              <Tag.CheckableTag
                checked={selectedGenres.length === 0}
                onClick={() => setSelectedGenres([])}
                className="genre-tag-item">
                All
              </Tag.CheckableTag>
              {genres.map((genre) => (
                <Tag.CheckableTag
                  key={genre.id}
                  checked={selectedGenres.includes(genre.id)}
                  onChange={(checked) => handleGenre(genre.id, checked)}
                  className="genre-tag-item">
                  {genre.name}
                </Tag.CheckableTag>
              ))}
            </Space>
          </>
        )}

        {movieLoading ? (
          <Row
            style={{ marginBottom: "1rem" }}
            gutter={[
              { xs: 12, sm: 14, md: 16, lg: 18 },
              { xs: 16, sm: 20, md: 24, lg: 30 },
            ]}>
            {Array.from(Array(8), (e, i) => (
              <Col key={i} xs={12} sm={8} md={6} lg={4}>
                <Skeleton.Image
                  active
                  style={{
                    width: "150px",
                    height: "150px",
                    marginBottom: ".5rem",
                  }}
                />
                <Skeleton active paragraph={{ rows: 1 }} />
              </Col>
            ))}
          </Row>
        ) : Object.keys(movieByGenre).length !== 0 &&
          movieByGenre.results.length !== 0 ? (
          <>
            <Row
              style={{ marginBottom: "1rem" }}
              gutter={[
                { xs: 12, sm: 14, md: 16, lg: 18 },
                { xs: 16, sm: 20, md: 24, lg: 30 },
              ]}>
              {movieByGenre.results.map((movie) => (
                <Col key={movie.id} xs={12} sm={8} md={6} lg={4}>
                  <MovieCard movie={movie} genre={genres} />
                </Col>
              ))}
            </Row>
            <Pagination
              className="mx-auto"
              defaultCurrent={page}
              showSizeChanger={false}
              onChange={(curr) => setPage(curr)}
              total={120}
            />
          </>
        ) : (
          <Empty
            image={EmptyImg}
            imageStyle={{ height: 300 }}
            description={
              <Typography.Title level={3}>
                There's No Movie Like That
              </Typography.Title>
            }
            className="mx-auto"
            style={{ paddingBottom: "2rem" }}
          />
        )}
      </Flex>
      <Footer />
    </div>
  );
};

export default Homepage;
