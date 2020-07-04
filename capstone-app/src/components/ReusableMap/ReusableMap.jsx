import React from "react";
import ReactMapGL from "react-map-gl";

export default function ReusableMap() {
  const [viewport, setViewport] = useState({
    latitude: 43.7135,
    longitude: -79.2916,
    zoom: 10.34,
    width: "80%",
    height: "500px",
  });
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
      mapStyle="mapbox://styles/darkthunder119/ck7uiltqn5ugg1iqhscr6epoe"
      className="maps__map"
      dragPan={true}
      touchAction="pan-y"
    >
      {props.children}
    </ReactMapGL>
  );
}
