import React from "react";
import { Card, Divider, Space, Typography } from "antd";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, genre }) => {
  const imgUrl = import.meta.env.VITE_IMAGE_URL;
  return (
    <Link to={`detail/${movie.id}`}>
      <Card
        hoverable
        className="movie-card"
        cover={
          <img
            alt="poster"
            src={`${imgUrl}${movie.poster_path}`}
            style={{ height: "100%" }}
          />
        }>
        <Typography.Title level={2} className="movie-card-title">
          {movie.title}
        </Typography.Title>
        <Typography.Text>
          <Space
            split={<Divider type="vertical" style={{marginInline:"5px"}} />}
            wrap
            className="movie-genre">
            {genre.map(
              (g) =>
                movie.genre_ids.find((e) => e == g.id) && (
                  <Typography.Text key={g.id}>{g.name}</Typography.Text>
                )
            )}
          </Space>
        </Typography.Text>
      </Card>
    </Link>
  );
};

export default MovieCard;
