import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./Nav";
<<<<<<< HEAD
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Mention from "./pages/Mention";


=======
import Footer from "./Footer";


import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Mention from "./pages/Mention";


>>>>>>> dev
export default class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Nav />
<<<<<<< HEAD

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Portfolio" element={<Portfolio/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/mention" element={<Mention/>}></Route>
        </Routes>
=======
        
        <main className="container-fluid gx-0">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Services" element={<Services/>}></Route>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/mention" element={<Mention/>}></Route>
          </Routes>
        </main>

        <Footer />
>>>>>>> dev

      </div>
    )
  };
}