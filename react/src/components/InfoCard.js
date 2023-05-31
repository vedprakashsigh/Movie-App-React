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
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png"
        }
        alt={title}
        width={300}
        height={450}
      />
      <div className="text">
        <span style={{ color: col }} className="vote">
          {vote_average.toFixed(1)} {/* int to float conversion */}
        </span>
        <h3>{title}</h3>
        <p className="content">{overview}</p>
        <span className="release-date">{release_date}</span>
      </div>
    </div>
  );
};
