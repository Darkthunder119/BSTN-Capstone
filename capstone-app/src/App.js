import React from "react";
import MapOne from "./components/MapOne/MapOne";
import { Helmet } from "react-helmet";
import StatsPage from "./pages/StatsPage";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from './pages/AboutPage/AboutPage';
import './App.scss';
// import analytics from './analytics'

// analytics.enablePlugin();
// analytics.page();
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
        {/* <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script> 
        <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="SAnalytics"/></noscript> */}
      </Helmet>
          {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/map" component={MapOne} />
          <Route path="/about" component={AboutPage} />
          <Route path="/stats" component={StatsPage} />
        </Switch>
    </div>
  );
}

export default App;
