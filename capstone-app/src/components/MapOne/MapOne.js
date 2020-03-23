import React, { useState, useEffect } from "react";
// import axios from "axios";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl
} from "react-map-gl";
import * as placesData from "../../assets/datasets/Places of Interest and Attractions.geojson.json";
import "./mapone.scss";
import * as schoolData from "../../assets/datasets/School locations-all types data.geojson";
import Geocoder from "react-mapbox-gl-geocoder";
import Header from "../Header/Header";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Pins from "../Pins/Pins";
import Assault from "../../assets/datasets/Assault_xaaaa.geojson";
import Auto from "../../assets/datasets/Auto Theft_xaaaa.geojson";
import BE from "../../assets/datasets/Break and Enter_xaaaa.geojson";
import Robbery from "../../assets/datasets/Robbery_xaaaa.geojson";
import Theft from "../../assets/datasets/Theft Over_xaaaa.geojson";
// const address = encodeURIComponent("2866 battleford road");
// const lat = "43.7652846";
// const lon = "-79.1629172";
const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

const scaleControlStyle = {
  position: "absolute",
  bottom: 36,
  left: 0,
  padding: "10px"
};

function MapOne() {
  //10.34/43.7135/-79.2916
  const [viewport, setViewport] = useState({
    latitude: 43.7135,
    longitude: -79.2916,
    zoom: 10.34,
    width: "80%",
    height: "600px"
  });
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchResultLayer, setSearchResultLayer] = useState(null);
  const [test, setTest] = useState({
    hoveredObject: "",
    pointerX: "",
    pointerY: ""
  });
  const [crimeData, setCrimeData] = useState({
    hoveredObject: "",
    pointerX: "",
    pointerY: ""
  });
  const [school, setSchool] = useState({
    hoveredObject: "",
    pointerX: "",
    pointerY: ""
  });

  // useEffect(() => {
  //   const listener = e => {
  //     if (e.key === "Escape") {
  //       setSelectedPlace(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);

  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []);

  const renderTooltip = () => {
    return (
      test.hoveredObject && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            pointerEvents: "none",
            left: test.pointerX,
            top: test.pointerY,
            backgroundColor: "#000000",
            color: "#FFFFFF",
            borderRadius: "5px"
          }}
        >
          {test.hoveredObject.message}
        </div>
      )
    );
  };

  const renderTooltipCrime = () => {
    return (
      crimeData.hoveredObject && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            pointerEvents: "none",
            left: crimeData.pointerX,
            top: crimeData.pointerY,
            backgroundColor: "#000000",
            color: "#FFFFFF",
            borderRadius: "5px"
          }}
        >
          {crimeData.hoveredObject.properties.MCI} <br />
          {crimeData.hoveredObject.properties.Neighbourhood} <br />
          {crimeData.hoveredObject.properties.occurrencedate}
        </div>
      )
    );
  };

  const renderTooltipSchool = () => {
    return (
      school.hoveredObject && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            pointerEvents: "none",
            left: crimeData.pointerX,
            top: crimeData.pointerY,
            backgroundColor: "#000000",
            color: "#FFFFFF",
            borderRadius: "5px"
          }}
        >
          {school.hoveredObject.properties.NAME} <br />
          {school.hoveredObject.properties.ADDRESS_FULL} <br />
          {school.hoveredObject.properties.POSTAL_CODE}
        </div>
      )
    );
  };
  let onSelected = (viewport, item) => {
    setViewport(viewport);
    setSearchResultLayer(
      new GeoJsonLayer({
        id: "search-result",
        data: [{ geometry: item.geometry, message: item.place_name }],
        pickable: true,
        getFillColor: [20, 75, 195, 255],
        getRadius: 25,
        pointRadiusMinPixels: 5,
        pointRadiusMaxPixels: 5,
        onHover: info => {
          setTest({
            hoveredObject: info.object,
            pointerX: info.x,
            pointerY: info.y
          });
        }
      })
    );
  };

  const crimeLayerOne = new GeoJsonLayer({
    id: "Assault-data",
    data: Assault,
    pickable: true,
    getFillColor: [165, 12, 12, 255],
    getRadius: 25,
    pointRadiusMinPixels: 5,
    pointRadiusMaxPixels: 5,
    onHover: info => {
      setCrimeData({
        hoveredObject: info.object,
        pointerX: info.x,
        pointerY: info.y
      });
    }
  });

  const crimeLayerTwo = new GeoJsonLayer({
    id: "Auto-data",
    data: Auto,
    pickable: true,
    getFillColor: [250, 101, 7, 255],
    getRadius: 25,
    pointRadiusMinPixels: 5,
    pointRadiusMaxPixels: 5,
    onHover: info => {
      setCrimeData({
        hoveredObject: info.object,
        pointerX: info.x,
        pointerY: info.y
      });
    }
  });

  const crimeLayerThree = new GeoJsonLayer({
    id: "BE-data",
    data: BE,
    pickable: true,
    getFillColor: [168, 48, 40, 255],
    getRadius: 25,
    pointRadiusMinPixels: 5,
    pointRadiusMaxPixels: 5,
    onHover: info => {
      setCrimeData({
        hoveredObject: info.object,
        pointerX: info.x,
        pointerY: info.y
      });
    }
  });

  const crimeLayerFour = new GeoJsonLayer({
    id: "Robbery-data",
    data: Robbery,
    pickable: true,
    getFillColor: [218, 1, 109, 255],
    getRadius: 25,
    pointRadiusMinPixels: 5,
    pointRadiusMaxPixels: 5,
    onHover: info => {
      setCrimeData({
        hoveredObject: info.object,
        pointerX: info.x,
        pointerY: info.y
      });
    }
  });

  const schoolLayer = new GeoJsonLayer({
    id: "School-data",
    data: schoolData,
    pickable: true,
    getFillColor: [226, 240, 54, 255],
    getRadius: 25,
    pointRadiusMinPixels: 5,
    pointRadiusMaxPixels: 5,
    onHover: info => {
      setSchool({
        hoveredObject: info.object,
        pointerX: info.x,
        pointerY: info.y
      });
    }
  });

  const crimeLayerFive = new GeoJsonLayer({
    id: "Theft-data",
    data: Theft,
    pickable: true,
    getFillColor: [148, 46, 60, 255],
    getRadius: 25,
    pointRadiusMinPixels: 5,
    pointRadiusMaxPixels: 5,
    onHover: info => {
      setCrimeData({
        hoveredObject: info.object,
        pointerX: info.x,
        pointerY: info.y
      });
    }
  });

  // api.walkscore.com/score?format=json&address=${address}&lat=${lat}&lon=${lon}&wsapikey=${API_KEY}`
  // componentDidMount() {
  //   axios.get(`http://localhost:8080/walk/score?format=json&address=${address}&lat=${lat}&lon=${lon}&wsapikey=${process.env.REACT_APP_WALK_API_KEY}`).then(res=>console.log(res)).catch(err=>console.log(err));

  // axios
  //   .get(
  //     "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/MCI_2014_to_2019/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
  //   )
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err));
  // console.log(placesData.default.features);
  // console.log(schoolData);
  // console.log(test);
  // }
  const queryParams = {
    country: "ca"
  };
  return (
    <>
      <Header />
      <div className="maps__text">
        The Following Map lets you search for any area and shows previous
        crimes, places of interest and schools in the area. Scroll down once you
        have selected something to know more about the Neighbourhood
      </div>
      <section className="maps__data">
        <Geocoder
          onSelected={onSelected}
          viewport={viewport}
          hideOnSelect={true}
          queryParams={queryParams}
          className="maps__search"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          updateInputOnSelect={true}
          pointZoom={14}
          transitionDuration={200}
        />
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={setViewport}
          mapStyle="mapbox://styles/darkthunder119/ck7uiltqn5ugg1iqhscr6epoe"
          className="maps__map"
        >
          {searchResultLayer && (
            <DeckGL
              {...viewport}
              layers={[
                searchResultLayer,
                crimeLayerOne,
                // crimeLayerTwo,
                // crimeLayerThree,
                // crimeLayerFour,
                // crimeLayerFive,
                // schoolLayer
              ]}
            >
              {renderTooltip}
              {renderTooltipCrime}
              {renderTooltipSchool}
            </DeckGL>
          )}
          {searchResultLayer &&
            placesData.default.features.map(places => (
              <Marker
                key={places.properties._id}
                latitude={places.geometry.coordinates[1]}
                longitude={places.geometry.coordinates[0]}
              >
                <Pins
                  size={12}
                  onClick={e => {
                    e.preventDefault();
                    setSelectedPlace(places);
                  }}
                  styled={{
                    cursor: "pointer",
                    fill: "#0000ff",
                    stroke: "none"
                  }}
                />
              </Marker>
            ))}
          {selectedPlace ? (
            <Popup
              latitude={selectedPlace.geometry.coordinates[1]}
              longitude={selectedPlace.geometry.coordinates[0]}
              onClose={() => setSelectedPlace(null)}
            >
              <div className="maps__popup">
                <h2 className="maps__popup-heading">
                  {selectedPlace.properties.NAME}
                </h2>
                <p className="maps__popup-textone">
                  {selectedPlace.properties.ATTRACTION_DESC}
                </p>
                <p className="maps__popup-texttwo">
                  {selectedPlace.properties.ADDRESS_FULL}
                </p>
              </div>
            </Popup>
          ) : null}
          <div style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>
          <div style={navStyle}>
            <NavigationControl />
          </div>
          <div style={scaleControlStyle}>
            <ScaleControl />
          </div>
        </ReactMapGL>
      </section>
    </>
  );
}

export default MapOne;
