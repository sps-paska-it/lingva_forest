import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'store/auth/selectors';
import { theme, devices, baseTransition } from '../styles/theme';
import { Header } from './Header/Header';

// const Home = lazy(() => import('../../pages/Home/Home'));
// const MoviesSearch = lazy(() => import('../../pages/MoviesSearch'));
// const Movie = lazy(() => import('../../pages/Movie'));
// const Cast = lazy(() => import('../Cast/Cast'));
// const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  const [currTheme, setCurrTheme] = useState({
    ...theme.dark,
    devices,
    baseTransition,
  });

  const selectedTheme = useSelector(selectTheme);

  useEffect(() => {
    if (!selectedTheme) return;
    if (selectedTheme.toLowerCase() === 'dark') {
      setCurrTheme({ ...theme.dark, devices, baseTransition });
    }
    if (selectedTheme.toLowerCase() === 'light') {
      setCurrTheme({ ...theme.light, devices, baseTransition });
    }
    if (selectedTheme.toLowerCase() === 'violet') {
      setCurrTheme({ ...theme.violet, devices, baseTransition });
    }
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={currTheme}>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/movies" element={<MoviesSearch />} /> */}
          {/* <Route path="/movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};
