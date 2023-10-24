import React from "react";
import { getMovieCredit, getMovieDetail } from "../services/services";
import { useLoaderData } from "react-router-dom";

import Footer from "../components/Footer";

import "../assets/css/Detail.css";
import { Button, Divider, Flex, Radio, Rate, Space, Typography } from "antd";
import TextTruncate from "react-text-truncate";
import {
  dateFormat,
  numberFormat,
  runtimeToDuration,
} from "../services/helper";

export const loader = async ({ params }) => {
  const { data } = await getMovieDetail(params.movieId);
  return data;
};

const Detail = () => {
  const movie = useLoaderData();

  const imgUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div className="w-full mx-auto relative">
        <img
          className="detail-img"
          src={`${imgUrl}${movie.backdrop_path}`}
          alt="banner"
        />
        <div className="layered-img absolute">
          <Typography.Title level={1} className="detail-title">
            {movie.title}
          </Typography.Title>
          <Flex align="center" justify="flex-start" className="detail-review">
            <Rate
              allowHalf
              value={movie.vote_average / 2}
              disabled
              className="detail-review-star"
            />
            <Typography.Text className="detail-review-count">
              {movie.vote_count} reviews
            </Typography.Text>
          </Flex>
          <Typography.Paragraph className="detail-review-overview">
            <TextTruncate
              line={3}
              text={movie.overview}
              className="detail-review-truncated"
            />
            <div className="detail-review-full">{movie.overview}</div>
          </Typography.Paragraph>
          <Flex gap={10}>
            <Button className="detail-button-first">Watch Trailer</Button>
            <Button className="detail-button-second">Add to Watchlist</Button>
          </Flex>
        </div>
      </div>
      <div className="w-full mx-auto detail-body">
        <Radio.Group defaultValue={"overview"} className="detail-body-radio">
          <Radio value={"overview"}>Overview</Radio>
          <Radio value={"characters"}>Characters</Radio>
          <Radio value={"review"}>Review</Radio>
        </Radio.Group>
        <Divider
          orientation="left"
          orientationMargin={0}
          className="detail-body-divider">
          Synopsis
        </Divider>
        <Typography.Paragraph>{movie.overview}</Typography.Paragraph>
        <Divider
          orientation="left"
          orientationMargin={0}
          className="detail-body-divider">
          Movie Info
        </Divider>
        <Space direction="vertical" className="detail-info">
          <Flex align="center" justify="flex-start">
            <Typography.Text style={{ fontWeight: 700, marginRight: ".5rem" }}>
              Release date:
            </Typography.Text>
            {dateFormat(movie.release_date)}
          </Flex>
          <Flex align="center" justify="flex-start">
            <Typography.Text style={{ fontWeight: 700, marginRight: ".5rem" }}>
              Production:
            </Typography.Text>
            <Space
              split={
                <Divider type="vertical" style={{ marginInline: "5px" }} />
              }
              wrap
              style={{ rowGap: "5px", columnGap: 0 }}>
              {movie.production_companies.map((company, i) => (
                <Typography.Text key={i}>{company.name}</Typography.Text>
              ))}
            </Space>
          </Flex>
          <Flex align="center" justify="flex-start">
            <Typography.Text style={{ fontWeight: 700, marginRight: ".5rem" }}>
              Popularity:
            </Typography.Text>
            {movie.popularity}
          </Flex>
          <Flex align="center" justify="flex-start">
            <Typography.Text style={{ fontWeight: 700, marginRight: ".5rem" }}>
              Budget:
            </Typography.Text>
            {`$ ${numberFormat(movie.budget)}`}
          </Flex>
          <Flex align="center" justify="flex-start">
            <Typography.Text style={{ fontWeight: 700, marginRight: ".5rem" }}>
              Duration:
            </Typography.Text>
            {runtimeToDuration(movie.runtime)}
          </Flex>
          <Flex align="center" justify="flex-start">
            <Typography.Text style={{ fontWeight: 700, marginRight: ".5rem" }}>
              Country:
            </Typography.Text>
            <Space
              split={
                <Divider type="vertical" style={{ marginInline: "5px" }} />
              }
              wrap
              style={{ rowGap: "5px", columnGap: 0 }}>
              {movie.production_countries.map((country, i) => (
                <Typography.Text key={i}>{country.name}</Typography.Text>
              ))}
            </Space>
          </Flex>
        </Space>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
