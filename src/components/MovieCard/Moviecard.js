import './MovieCard.css'

const MovieCard = ({ posterPath, id }) => {
  console.log('MovieCard', id)
  return (
    <div key={id}>
      <img src={posterPath} alt="poster" />
    </div>
  )

}

export default MovieCard