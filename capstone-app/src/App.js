import React from "react";
import { Helmet } from "react-helmet";
import StatsPage from "./pages/StatsPage";
import MapPage from "./pages/MapPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import "./App.scss";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ textAlign: "center" }}>
        <Helmet>
          <title>Hestia</title>
          <meta
            name="description"
            content="Hestia, a neighbourhood crime information site"
          />
        </Helmet>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
