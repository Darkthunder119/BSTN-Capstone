import React from "react";
import Header from "../components/Header/Header";
import { Grid } from "react-loader-spinner";

const MapOne = React.lazy(() => import("../components/MapOne/MapOne"));

const MapPage = () => {
  return (
    <>
      <Header />
      <React.Suspense
        fallback={
          <Grid
            color="#263D4D"
            height={100}
            width={100}
            wrapperStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          />
        }
      >
        <MapOne />
      </React.Suspense>
    </>
  );
};

export default MapPage;
