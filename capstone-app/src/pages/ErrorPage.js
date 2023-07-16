import React from "react";
import Header from "../components/Header/Header";
import "./landing.scss";
import TopMap from "../components/TopMap/TopMap";

function ErrorPage() {
  return (
    <>
      <Header />
      <div>Routing back to some known elements...404 not found</div>
      <TopMap />
    </>
  );
}

export default ErrorPage;
