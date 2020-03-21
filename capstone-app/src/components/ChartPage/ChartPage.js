import React from "react";
import Chart from "react-apexcharts";
import '../Statistics/stats.scss'
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
      <section className="stats">
        <div className="stats__text">The following graphs are interactable using the input selectors and display crime statistics for all 140 Neighbourhoods</div>
        <select onChange={this.onChangeHandler} name="select" className="stats__select">
          {this.props.data.map((val, i) => (
            <option key={i} className="stats__options">{val}</option>
          ))}
        </select>
        <Chart
          options={this.state.options}
          series={[{ name: this.props.namer, data: this.props.assault }]}
          type="bar"
          height="700"
          width="90%"
          className="stats__graph"
        />
      </section>
    );
  }
}

export default ChartPage;
