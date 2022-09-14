
import { Routes, Route, Outlet, Link } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>


      <nav>
        <Link to="/">Home</Link>


        <Link to="/movies">Movies</Link>
      </nav>

      <Outlet />
    </>
  )
}
const HomePage = () => {
  return (
    <>
      <ul>
        <li>film</li>
      </ul>
    </>
  )
}

const MoviesPage = () => {
  return (
    <>
      <form>
        <input type="text" name="search" />
        <button type="submit">search</button>
      </form>
    </>
  )
}

const MovieDetailsPage = () => {
  return (
    <>
      <Link to="/movies">Go Back</Link>
      <div>
        <p>obrazek</p>
        <p>opis</p>
      </div>
      <div>
        <p>Additional informaction</p>
        <Link to="/movies/:movieId/cast">Cast</Link>
        <Link to="/movies/:movieId/reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  )
}

const Cast = () => {
  return (
    <>
      <ul>
        <li>Actors</li>
      </ul>
    </>
  )
}

const Reviews = () => {
  return (
    <>
      <p> komentarze</p>
    </>
  )
}

export default function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
