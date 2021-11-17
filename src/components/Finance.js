import React, { Component } from 'react'
import axios from 'axios';
import './Finance.css';

class Finance extends Component {

    constructor(props){
      super(props);
      this.state = {
        data: []
      }
    }
    async componentDidMount() {
      const res = await axios.get(`https://forbes400.herokuapp.com/api/forbes400/`);
      this.setState({ data: res.data });
    }

    render() {
      return (
        <div>
          <h1>Finance Page</h1>
          <table class="table">
          <tr>
          <th>Name</th>
          <th>Net Worth</th>
          </tr>
          <tr>
          {this.state.data.map(data => <div>
          
          <td>{data.person.name}</td><td>{data.finalWorth}</td></div>)}
            </tr>
          </table>
        </div>
      );
    }
}

export default Finance;