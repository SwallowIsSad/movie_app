import React from "react";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div className="movie">
      <h2 className="movie_title">{title}</h2>
      <h2 className="movie_year">{year}</h2>
      <h2 className="movie_summary">{summary}</h2>
    </div>
  );
}

export default Movie;
// 주말 업뎃
