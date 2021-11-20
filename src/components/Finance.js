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
          <h1 class="p-2 is-size-3 has-text-weight-bold">Finance Page</h1>
          
          <div class="table-container p-5">
            <table class="table is-hoverable">
              <thead class="has-background-light">
                <tr>
                  <th>Name</th>
                  <th>Source</th>
                  <th>Net Worth</th>
                  <th>Square Image</th>
                  <th>Last row</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(data => 
                  <tr>
                    <td>{data.person.name}</td>
                    <td>{data.source}</td>
                    <td>${data.finalWorth}*2</td>
                    <td><img src="{data.person.squareImage}"></img></td>
                    <td><img src="https://specials-images.forbesimg.com/imageserve/5f47d4de7637290765bce495/416x416.jpg?background=000000&cropX1=1699&cropX2=3845&cropY1=559&cropY2=2704"></img></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
}

export default Finance;