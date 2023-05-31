export const InfoCard = ({
  poster_path,
  overview,
  title,
  release_date,
  vote_average,
}) => {
  const col =
    vote_average >= 8 ? "lightgreen" : vote_average >= 6 ? "orange" : "red";

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={300}
        height={450}
      />
      <div className="text">
        <span style={{ color: col }} className="vote">
          {vote_average}
        </span>
        <h3>{title}</h3>
        <p className="content">{overview}</p>
        <span className="release-date">{release_date}</span>
      </div>
    </div>
  );
};
