import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://forbes400.herokuapp.com/api/forbes400/'
})

class FinancePage extends Component{
  state = {
    billis : [] //Our list of billionaires we will populate from the API
  }

  constructor() {
    super();
    api.get('/').then(res =>{
      console.log(res.data)
      this.setState({billis: res.data})
    })
  }
  render(){
    return <div>
      <h1>A list of billionaires, descending:</h1>
      {this.state.billis.map(billis => <h3>{billis.uri}</h3>)}
    </div>
  }
}

export default FinancePage;