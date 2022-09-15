
import { Routes, Route, Outlet, Link } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import HomePage from "pages/HomePage/HomePage";
import MoviesPage from "pages/MoviesPage/MoviesPage";


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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
