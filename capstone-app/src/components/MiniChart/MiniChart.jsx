import React from "react";
import ReactMinimalPieChart from 'react-minimal-pie-chart';

export default function MiniChart({data, totalValue, isAnimated}) {
  return (
    <ReactMinimalPieChart
      className="welcome__charts"
      animate={isAnimated}
      animationDuration={5000}
      animationEasing="ease-out"
      // cx={50}
      // cy={50}
      data={data}
      label
      labelPosition={70}
      labelStyle={{
        fontFamily: "sans-serif",
        fontSize: "8px",
        fill: "#FFF",
        pointerEvents:"none"
      }}
      lengthAngle={360}
      lineWidth={75}
      onMouseOver={undefined}
      paddingAngle={10}
      radius={50}
      rounded={false}
      startAngle={0}
      totalValue={totalValue}
      viewBoxSize={[100, 100]}
    />
  );
}
