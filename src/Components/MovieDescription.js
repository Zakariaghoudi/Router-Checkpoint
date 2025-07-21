import { useParams, useNavigate } from 'react-router-dom';
import './MovieDescription.css'
function MovieDescription({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-description">
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default MovieDescription;