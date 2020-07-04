import React from 'react';
import axios from 'axios';
import Welcome from '../Welcome/Welcome';

const API_URL = "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Neighbourhood_MCI/FeatureServer/0/query?where=1%3D1&outFields=Neighbourhood,Population,Assault_2019,AutoTheft_2019,BreakandEnter_2019,Homicide_2019,Robbery_2019,TheftOver_2019&outSR=4326&f=json";

export default class TopMap extends React.Component{
    constructor(props){
        super(props)
        this.state={
            neighbourData: '',
            randData: ''
        }
    }
    async componentDidMount(){
        const neighData = await axios.get(`${API_URL}`);
        this.setState({neighbourData: neighData.data.features});
        const randomData = await this.state.neighbourData.sort(()=> 0.5 - Math.random()).slice(0, 3);
        this.setState({randData : randomData});
    }
    render(){
        return(<><Welcome randData={this.state.randData}/> </>)
    }
}