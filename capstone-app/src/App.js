import React from "react";
import MapOne from "./components/MapOne/MapOne";
import { Helmet } from "react-helmet";
import StatsPage from "./pages/StatsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from './pages/AboutPage/AboutPage';
// import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <Helmet>
        <title>Hestia</title>
        <meta
          name="description"
          content="Hestia, a neighbourhood crime information site"
        />
      </Helmet>
      <BrowserRouter>
          {/* <Header /> */}
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
