import React from "react";
import "./welcome.scss";
import ReactMinimalPieChart from "react-minimal-pie-chart";
class Welcome extends React.Component {
  render() {
    return (
      <article className="welcome">
        <h2 className="welcome__heading">Welcome To HESTIA!</h2>
        <div className="welcome__text">
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
        </div>
      </article>
    );
  }
}

export default Welcome;
