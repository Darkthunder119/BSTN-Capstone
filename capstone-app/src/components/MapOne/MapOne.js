import React, { useState } from "react";
import axios from "axios";
import ReactMapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl
} from "react-map-gl";
import * as placesData from "../../assets/datasets/Places of Interest and Attractions.geojson";
import "./mapone.scss";
import * as schoolData from "../../assets/datasets/School locations-all types data.geojson";
import Geocoder from "react-mapbox-gl-geocoder";
import Header from "../Header/Header";
import DeckGL, {
  GeoJsonLayer,
  HexagonLayer,
  ScatterplotLayer,
  PolygonLayer
} from "deck.gl";
import Assault from "../../assets/datasets/Assault_xaaaa.geojson";
import Auto from "../../assets/datasets/Auto Theft_xaaaa.geojson";
import BE from "../../assets/datasets/Break and Enter_xaaaa.geojson";
import Robbery from "../../assets/datasets/Robbery_xaaaa.geojson";
import Theft from "../../assets/datasets/Theft Over_xaaaa.geojson";
import Switch from "react-switch";
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

  const [checkedSchool, setCheckedSchool] = useState(false);
  const [checkedAssault, setCheckedAssault] = useState(false);
  const [checkedAuto, setCheckedAuto] = useState(false);
  const [checkedBE, setCheckedBE] = useState(false);
  const [checkedRobbery, setCheckedRobbery] = useState(false);
  const [checkedTheft, setCheckedTheft] = useState(false);
  const [checkedPlaces, setCheckedPlaces] = useState(false);
  const [checkNeigh, setCheckNeigh] = useState(false);
  const [neigh, setNeigh] = useState({
    hoveredObject: "",
    pointerX: "",
    pointerY: ""
  });
  const [polyData, setPolyData] = useState("");
  // zoom stop rendering and limit zoom and then heatmap/hexagonallayer
  // legend that starts with 2019 stats by default
  // webgl force enable -??
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
            left: school.pointerX,
            top: school.pointerY,
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
  const placesLayer = new GeoJsonLayer({
    id: "Places of Interest",
    data: placesData,
    pickable: true,
    getFillColor: [69, 74, 222, 255],
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

  const renderTooltipNeigh = () => {
    return (
      neigh.hoveredObject && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            pointerEvents: "none",
            left: neigh.pointerX,
            top: neigh.pointerY,
            backgroundColor: "#000000",
            color: "#FFFFFF",
            borderRadius: "5px"
          }}
        >
          {"Population: " + neigh.hoveredObject.attributes.Population} <br />
          {"NeighbourHood: " + neigh.hoveredObject.attributes.Neighbourhood} <br />
          {"Assaults 2019: " + neigh.hoveredObject.attributes.Assault_2019} <br />
          {"BreakandEnter 2019: " + neigh.hoveredObject.attributes.BreakandEnter_2019} <br />
          {"Auto Thefts 2019: " + neigh.hoveredObject.attributes.AutoTheft_2019} <br />
          {"Homicides 2019: " + neigh.hoveredObject.attributes.Homicide_2019} <br />
          {"Robberies 2019: " + neigh.hoveredObject.attributes.Robbery_2019} <br />
          {"TheftOver 2019: " + neigh.hoveredObject.attributes.TheftOver_2019} <br />
        </div>
      )
    );
  };

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
  const getData = () => {
    axios
      .get(
        "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Neighbourhood_MCI/FeatureServer/0/query?where=1%3D1&outFields=Neighbourhood,Population,Assault_2019,AutoTheft_2019,BreakandEnter_2019,Homicide_2019,Robbery_2019,TheftOver_2019&outSR=4326&f=json"
      )
      .then(response => {
        setPolyData(response.data.features);
      })
      .catch(err => console.log(err));
  };
  if (!polyData) {
    getData();
  }
  let polyLayer = new PolygonLayer({
    id: "polygon-layer",
    data: polyData,
    pickable: true,
    stroked: true,
    filled: true,
    wireframe: true,
    visible: true,
    lineWidthMinPixels: 1,
    getPolygon: d => d.geometry.rings,
    getFillColor: d => [
      d.attributes.Population / 60,
      140,
      0
    ],
    getLineColor: [80, 80, 80],
    getLineWidth: 1,
    onHover: info => {
      setNeigh({
        hoveredObject: info.object,
        pointerX: info.x,
        pointerY: info.y
      });
    }
  });

  const queryParams = {
    country: "ca"
  };
  const layers = [searchResultLayer];
  if (checkedSchool) {
    layers.push(schoolLayer);
  }
  if (checkedAssault) {
    layers.push(crimeLayerOne);
  }
  if (checkedAuto) {
    layers.push(crimeLayerTwo);
  }
  if (checkedBE) {
    layers.push(crimeLayerThree);
  }
  if (checkedRobbery) {
    layers.push(crimeLayerFour);
  }
  if (checkedTheft) {
    layers.push(crimeLayerFive);
  }
  if (checkedPlaces) {
    layers.push(placesLayer);
  }
  if (
    checkNeigh && polyData
  ) {
    layers.push(polyLayer);
  }

  // console.log(polyData);
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
          dragPan={true} touchAction="pan-y"
        >
          {searchResultLayer && (
            <DeckGL {...viewport} layers={layers} getCursor={() => "crosshair"}>
              {renderTooltip}
              {renderTooltipCrime}
              {renderTooltipSchool}
              {renderTooltipNeigh}
            </DeckGL>
          )}
          <div style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>
          <div style={navStyle}>
            <NavigationControl />
          </div>
          <div style={scaleControlStyle}>
            <ScaleControl />
          </div>
          {searchResultLayer && (
            <div className="maps__mainlegend">
              <div className="maps__legend">
                <Switch
                  onChange={() => setCheckedSchool(!checkedSchool)}
                  checked={checkedSchool}  handleDiameter={13} uncheckedIcon={false} checkedIcon={false}  height={15} width={30}
                />
                <p style={{ paddingLeft: "5px" }}> School Data</p>
              </div>
              <div className="maps__legend">
                <Switch
                  onChange={() => setCheckedAssault(!checkedAssault)}
                  checked={checkedAssault}  handleDiameter={13} uncheckedIcon={false} checkedIcon={false} height={15} width={30}
                />
                <p style={{ paddingLeft: "5px" }}> Assaults 2014-2019</p>
              </div>
              <div className="maps__legend">
                <Switch
                  onChange={() => setCheckedAuto(!checkedAuto)}
                  checked={checkedAuto}  handleDiameter={13} uncheckedIcon={false} checkedIcon={false} height={15} width={30}
                />
                <p style={{ paddingLeft: "5px" }}> Auto Theft 2014-2019</p>
              </div>
              <div className="maps__legend">
                <Switch
                  onChange={() => setCheckedRobbery(!checkedRobbery)}
                  checked={checkedRobbery} handleDiameter={13}  uncheckedIcon={false} checkedIcon={false} height={15} width={30}
                />
                <p style={{ paddingLeft: "5px" }}> Robberies 2014-2019</p>
              </div>
              <div className="maps__legend">
                <Switch
                  onChange={() => setCheckedBE(!checkedBE)}
                  checked={checkedBE}  handleDiameter={13} uncheckedIcon={false} checkedIcon={false} height={15} width={30}
                />
                <p style={{ paddingLeft: "5px" }}>Break and Enters 2014-2019</p>
              </div>
              <div className="maps__legend">
                <Switch
                  onChange={() => setCheckedTheft(!checkedTheft)}
                  checked={checkedTheft}  handleDiameter={13} uncheckedIcon={false} checkedIcon={false} height={15} width={30}
                />
                <p style={{ paddingLeft: "5px" }}> Thefts 2014-2019</p>
              </div>
              <div className="maps__legend">
                <Switch
                  onChange={() => setCheckedPlaces(!checkedPlaces)}
                  checked={checkedPlaces}  handleDiameter={13}  uncheckedIcon={false} checkedIcon={false} height={15} width={30}
                />
                <p style={{ paddingLeft: "5px" }}> Places of Interest</p>
              </div>
              <div className="maps__legend">
                <Switch
                  onChange={() => setCheckNeigh(!checkNeigh)}
                  checked={checkNeigh} handleDiameter={13}  uncheckedIcon={false} checkedIcon={false} height={15} width={30}
                />
                <p style={{ paddingLeft: "5px" }}> Neighbourhood Boundaries</p>
              </div>
            </div>
          )}
        </ReactMapGL>
      </section>
    </>
  );
}

export default MapOne;
