import React from "react";
import "./welcome.scss";
import MiniChart from "../MiniChart/MiniChart";
import Loader from "react-loader-spinner";
class Welcome extends React.Component {
  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  //data needs to look like below:
  // {
  //   title: "Assault",
  //   color: "#263D4D",
  //   value: data
  // }
  render() {
    const { randData } = this.props;
    if (randData) {
      return (
        <article className="welcome">
          <h2 className="welcome__heading">Welcome to HESTIA!</h2>
          <div className="welcome__text">
            This website provides stats on your neighbourhood's crime from 2014
            to 2019 as provided by the Toronto Police OpenDataBase. Other
            datasets including Place of Interest, schooling and TTC data is also
            available.
          </div>
          <div className="welcome__chartbox">
            {randData.map((val,i) => {
              let arr = Object.entries(val.attributes);
              arr.splice(0,2);
              let arr2 =[];
              let totalValue = 0;
              for(let i=0; i<arr.length; i++){
                let title = arr[i][0];
                let color = this.getRandomColor();
                let data = arr[i][1];
                totalValue = totalValue + data;
                arr2.push({title:title,color:color,value:data});
              }
              return <MiniChart
                data={arr2}
                totalValue={totalValue}
                isAnimated={true}
                key={i}
              />;
            })}
          </div>
          <div className="welcome__texttwo">
            <p className="welcome__para1">
              {randData[0].attributes.Neighbourhood}
            </p>
            <p className="welcome__para2">
              {randData[1].attributes.Neighbourhood}
            </p>
            <p className="welcome__para3">
              {randData[2].attributes.Neighbourhood}
            </p>
          </div>
        </article>
      );
    } else {
      return (
        <Loader
          type="Grid"
          color="#263D4D"
          height={100}
          width={100}
          style={{
            backgroundColor: "#D1735A",
            height: "100vh",
            paddingTop: "5rem",
          }}
        />
      );
    }
  }
}

export default Welcome;
