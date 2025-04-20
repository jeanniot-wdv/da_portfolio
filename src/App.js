import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HeadProvider } from "react-head";

import Nav from "./components//Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Mention from "./pages/Mention";


const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll en haut de page quand route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

export default class App extends React.Component {
  render() {
    return (
      <HeadProvider>
      <div className="App">

        <Nav />

        <main>
          <ScrollToTop>
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