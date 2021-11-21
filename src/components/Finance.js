import React, { Component } from 'react'
import axios from 'axios';
import './Finance.css';

function NetWorthChange(props) {
  const difference = ((props.final*1000000)-(props.prev*1000000));
  var colorTag = "has-text-grey-light";
  if (difference > 0) {
    colorTag = "has-text-success"
  } else if (difference < 0) {
    colorTag = "has-text-danger"
  }
  return <td class={colorTag}>${difference.toLocaleString()}</td>;
}

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
                  <th> </th>
                  <th>Rank </th>
                  <th>Name</th>
                  <th>Live Net Worth</th>
                  <th>Previous Day Net Worth</th>
                  <th>Change Compared to Previous Day</th>
                  <th>Private Assets Worth</th>
                  <th>Source</th>
                  <th>Country of Residence</th>
                  
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(data => 
                  <tr>
                    <td><img src={data.person.squareImage} width="150" height="150"></img></td>
                    <td>{data.rank}</td>
                    <td>{data.person.name}</td>
                    <td>${(data.finalWorth*1000000).toLocaleString()}</td>
                    <td>${(data.estWorthPrev*1000000).toLocaleString()}</td>
                    <NetWorthChange final={data.finalWorth} prev={data.estWorthPrev}/>
                    <td>${(data.privateAssetsWorth*1000000).toLocaleString()}</td>
                    <td>{data.source}</td>
                    <td>{data.countryOfCitizenship}</td>
                    
                    
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