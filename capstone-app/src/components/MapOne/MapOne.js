import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMapGL, { Marker, Popup, Source, Layer } from "react-map-gl";
import * as placesData from "../../assets/datasets/Places of Interest and Attractions.geojson.json";
import placeImg from "../../assets/Images/places-1011.svg";
import "./mapone.scss";
import * as schoolData from "../../assets/datasets/School locations-all types data.geojson";
import * as robbData from "../../assets/datasets/Robbery_2014_to_2019.geojson";
import Geocoder from "react-mapbox-gl-geocoder";
import Header from "../Header/Header";
// const address = encodeURIComponent("2866 battleford road");
// const lat = "43.7652846";
// const lon = "-79.1629172";

function MapOne() {
  //10.34/43.7135/-79.2916
  const [viewport, setViewport] = useState({
    latitude: 43.7135,
    longitude: -79.2916,
    zoom: 10.34,
    width: "100vw",
    height: "600px"
  });
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPlace(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  let onSelected = (viewport, item) => {
    setViewport(viewport);
    console.log("Selected: ", item);
  };

  // api.walkscore.com/score?format=json&address=${address}&lat=${lat}&lon=${lon}&wsapikey=${API_KEY}`
  // componentDidMount() {
  //   axios.get(`http://localhost:8080/walk/score?format=json&address=${address}&lat=${lat}&lon=${lon}&wsapikey=${process.env.REACT_APP_WALK_API_KEY}`).then(res=>console.log(res)).catch(err=>console.log(err));

  // }
  const queryParams = {
    country: "ca"
  };
  // axios
  //   .get(
  //     "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/MCI_2014_to_2019/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
  //   )
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err));
  // console.log(placesData.default.features);
  // console.log(schoolData);
  // console.log(test);
  return (
    <>
      <Header />
      <div>HAHHAHAHAHAHAHAH</div>
      <section className="mapsData">
        <Geocoder
          onSelected={onSelected}
          viewport={viewport}
          hideOnSelect={true}
          queryParams={queryParams}
          className="map__search"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        />
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={setViewport}
          mapStyle="mapbox://styles/darkthunder119/ck7ty708v4f2j1imk71n1fsr5"
          className="map"
        >
          {placesData.default.features.map(places => (
            <Marker
              key={places.properties._id}
              latitude={places.geometry.coordinates[1]}
              longitude={places.geometry.coordinates[0]}
            >
              <img
                className="image__stylez"
                onClick={e => {
                  e.preventDefault();
                  setSelectedPlace(places);
                }}
                src={placeImg}
              ></img>
            </Marker>
          ))}
          {selectedPlace ? (
            <Popup
              latitude={selectedPlace.geometry.coordinates[1]}
              longitude={selectedPlace.geometry.coordinates[0]}
              onClose={() => setSelectedPlace(null)}
            >
              <div>
                <h2>{selectedPlace.properties.NAME}</h2>
                <p>{selectedPlace.properties.ATTRACTION_DESC}</p>
                <p>{selectedPlace.properties.ADDRESS_FULL}</p>
              </div>
            </Popup>
          ) : null}
          <Source id="mci-data" type="geojson" data={robbData}>
            <Layer
              id="point"
              type="circle"
              paint={{
                "circle-radius": 5,
                "circle-color": "#8B0000"
              }}
            />
          </Source>
          <Source id="school-data" type="geojson" data={schoolData}>
            <Layer
              id="point2"
              type="circle"
              paint={{
                "circle-radius": 5,
                "circle-color": "#00FF00"
              }}
            />
          </Source>
        </ReactMapGL>
      </section>
    </>
  );
}

export default MapOne;
