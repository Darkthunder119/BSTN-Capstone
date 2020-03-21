import React from "react";
import Chart from "react-apexcharts";

class ChartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#f4f4f4",
          foreColor: "#333"
        },
        xaxis: {
          categories: this.props.neigh
        },
        dataLabels: {
          enabled: false
        },
        title:{
            text: "Population",
            align: "center" 
        }
      }
    };
  }

  onChangeHandler = e => {
    e.preventDefault();
    this.props.papa(e);
  };

  componentDidUpdate(){
    document.querySelector('.apexcharts-title-text').innerHTML= this.props.namer;
  }
  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={[{ name: this.props.namer, data: this.props.assault }]}
          type="bar"
          height="700"
          width="90%"
        />
        <select onChange={this.onChangeHandler} name="select">
          {this.props.data.map((val, i) => (
            <option key={i}>{val}</option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export default ChartPage;
