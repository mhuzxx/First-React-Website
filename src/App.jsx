import { useEffect } from 'react';
import {BrowserRouter,Routes,Route,useLocation,} from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}


export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* Shared website layout */}
        <Route path="/" element={<Layout />}>

          {/* Home */}
          <Route index element={<Home />} />

          {/* Main pages */}
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />

        </Route>


        {/* Login has its own layout */}
        <Route path="/login" element={<LoginPage />} />


        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}