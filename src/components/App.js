import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { lazy, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'store/auth/selectors';
import { theme, devices, baseTransition } from '../styles/theme';
import { Layout } from './Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Courses = lazy(() => import('pages/Courses/Courses'));
const Classes = lazy(() => import('pages/Classes/Classes'));
const School = lazy(() => import('pages/School/School'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const [currTheme, setCurrTheme] = useState({
    ...theme.dark,
    // ...theme.green,
    // ...theme.yellow,
    // ...theme.light,
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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/school" element={<School />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};
