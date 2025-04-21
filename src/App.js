import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HeadProvider } from "react-head";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Mention from "./pages/Mention";

// Composant permettant de remonter en haut de la page 
// à chaque changement de route
const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Lorsque l'URL change, on remonte automatiquement en haut de la page
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children; // On retourne les routes inchangées
};

export default class App extends React.Component {
  render() {
    return (
      // Fournisseur de balises <head> dynamiques (ex: titre, meta tags...)
      <HeadProvider>
      <div className="App">

        <Header />

        <main>
          {/* Gestion du scroll à chaque changement de page */}
          <ScrollToTop>
              {/* Définition des routes principales */}
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Services" element={<Services/>}></Route>
              <Route path="/Portfolio" element={<Portfolio/>}></Route>
              <Route path="/Contact" element={<Contact/>}></Route>
              <Route path="/mention" element={<Mention/>}></Route>
            </Routes>
          </ScrollToTop>
        </main>

        <Footer />

      </div>
      </HeadProvider>
    )
  };
}