import React from "react";
import "./welcome.scss";
import ReactMinimalPieChart from "react-minimal-pie-chart";
class Welcome extends React.Component {
  render() {
    return (
      <article className="welcome">
        <h2 className="welcome__heading">Welcome to HESTIA!</h2>
        <div className="welcome__text">This website provides stats on your neighbourhood's crime from 2014 to 2019 as provided by the Toronto Police OpenDataBase. Other datasets including Place of Interest, schooling and TTC data is also available.</div>
          <div className="welcome__chartbox">
            <ReactMinimalPieChart
              className="welcome__charts"
              animate={true}
              animationDuration={5500}
              animationEasing="ease-out"
              cx={50}
              cy={50}
              data={[
                {
                  color: "#263D4D",
                  value: 82
                }
              ]}
              label
              labelPosition={0}
              labelStyle={{
                fontFamily: "sans-serif",
                fontSize: "25px"
              }}
              lengthAngle={360}
              lineWidth={20}
              onClick={undefined}
              onMouseOut={undefined}
              onMouseOver={undefined}
              paddingAngle={0}
              radius={50}
              rounded={true}
              startAngle={0}
              totalValue={100}
              viewBoxSize={[100, 100]}
            />
            <ReactMinimalPieChart
              className="welcome__charts"
              animate={true}
              animationDuration={5500}
              animationEasing="ease-out"
              cx={50}
              cy={50}
              data={[
                {
                  color: "#263D4D",
                  value: 93
                }
              ]}
              label
              labelPosition={0}
              labelStyle={{
                fontFamily: "sans-serif",
                fontSize: "25px"
              }}
              lengthAngle={360}
              lineWidth={20}
              onClick={undefined}
              onMouseOut={undefined}
              onMouseOver={undefined}
              paddingAngle={0}
              radius={50}
              rounded={true}
              startAngle={0}
              totalValue={100}
              viewBoxSize={[100, 100]}
            />
            <ReactMinimalPieChart
              className="welcome__charts"
              animate={true}
              animationDuration={5500}
              animationEasing="ease-out"
              cx={50}
              cy={50}
              data={[
                {
                  color: "#263D4D",
                  value: 45
                }
              ]}
              label
              labelPosition={0}
              labelStyle={{
                fontFamily: "sans-serif",
                fontSize: "25px"
              }}
              lengthAngle={360}
              lineWidth={20}
              onClick={undefined}
              onMouseOut={undefined}
              onMouseOver={undefined}
              paddingAngle={0}
              radius={50}
              rounded={true}
              startAngle={0}
              totalValue={100}
              viewBoxSize={[100, 100]}
            />
          </div>
          <div className="welcome__texttwo"><p className="welcome__para1">Rouge</p><p className="welcome__para2">Guildwood</p><p className="welcome__para3">Bay Street Corridor</p></div>
      </article>
    );
  }
}

export default Welcome;
