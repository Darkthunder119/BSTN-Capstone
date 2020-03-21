import React from "react";
import Axios from "axios";
import ChartPage from "../ChartPage/ChartPage";
import Header from '../Header/Header'

class StatsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: "",
      stuffer: "Population"
    };
  }

  componentDidMount() {
    Axios.get(
      "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Neighbourhood_MCI/FeatureServer/0/query?where=1%3D1&outFields=Neighbourhood,Population,Assault_2014,Assault_2015,Assault_2016,Assault_2017,Assault_2018,Assault_2019,Assault_AVG,Assault_CHG,Assault_Rate_2019,AutoTheft_2014,AutoTheft_2015,AutoTheft_2016,AutoTheft_2017,AutoTheft_2018,AutoTheft_2019,AutoTheft_AVG,AutoTheft_CHG,AutoTheft_Rate_2019,BreakandEnter_2014,BreakandEnter_2015,BreakandEnter_2016,BreakandEnter_2017,BreakandEnter_2018,BreakandEnter_2019,BreakandEnter_AVG,BreakandEnter_CHG,BreakandEnter_Rate_2019,Homicide_2014,Homicide_2015,Homicide_2016,Homicide_2017,Homicide_2018,Homicide_2019,Homicide_AVG,Homicide_CHG,Homicide_Rate_2019,Robbery_2014,Robbery_2015,Robbery_2016,Robbery_2017,Robbery_2018,Robbery_2019,Robbery_AVG,Robbery_CHG,Robbery_Rate_2019,TheftOver_2014,TheftOver_2015,TheftOver_2016,TheftOver_2017,TheftOver_2018,TheftOver_2019,TheftOver_AVG,TheftOver_CHG,TheftOver_Rate_2019&outSR=4326&f=json"
    )
      .then(response => this.setState({ areas: response.data.features }))
      .catch(err => console.log(err));
  }
  getNeighbourhoods = () => {
    if (this.state) {
      let neigh = this.state.areas.map(val => val.attributes.Neighbourhood);
      return neigh;
    }
  };
  getAssaultData = () => {
    if (this.state) {
      let assault = this.state.areas.map(
        val => val.attributes[this.state.stuffer]
      );
    //   console.log(assault, "from the get");
      return assault;
    }
  };
  getListOfData() {
    if (this.state) {
      let data = Object.keys(this.state.areas[0].attributes);
      data.shift();
      return data;
    }
  }
  onPapaChangeHandler = e => {
    this.setState({ stuffer: e.target.value }, () => {
    //   console.log(this.state.stuffer, "HAHAH");
    });
  };
  render() {
    if (Array.isArray(this.state.areas)) {
      return (
        <> 
        <Header /> 
        <ChartPage
          assault={this.getAssaultData()}
          neigh={this.getNeighbourhoods()}
          data={this.getListOfData()}
          papa={this.onPapaChangeHandler}
          namer={this.state.stuffer}
        />
        </>
      );
    } else {
      return <><Header />LOADING...</>;
    }
  }
}

export default StatsPage;
