import React from "react";
import "./App.css";
import MapOne from "./components/MapOne/MapOne";
import { Helmet } from "react-helmet";
import StatsPage from "./components/Statistics/StatsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Hestia</title>
        <meta
          name="description"
          content="Hestia, a neighbourhood crime information site"
        />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/map" component={MapOne} />
          <Route path="/about" component={AboutPage} />
          <Route path="/stats" component={StatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
