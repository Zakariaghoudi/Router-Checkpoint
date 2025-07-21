


function MovieCard({ movie }) {
  const { title, description, posterURL, rating } = movie;

  return (
    
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-card-poster" />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-description">{description}</p>
        <p className="movie-card-rating">Rating: {rating} / 5</p>
      </div>
    </div>
  );
}

export default MovieCard;