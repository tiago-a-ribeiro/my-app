import React, { Component } from 'react'
import axios from 'axios';
import './Finance.css';
import DataTable from 'react-data-table-component';

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

const columns = [
  {
    name: '',
    selector: row => row.image,
    sortable: true,
},
  {
      name: 'Rank',
      selector: row => row.rank,
      sortable: true,
  },
  {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
  },
  {
    name: 'Live Net Worth',
    selector: row => row.netWorth,
    //sortable: true,
},
{
  name: 'Previous Day Net Worth',
  selector: row => row.yesterdayWorth,
  //sortable: true,
},
{
  name: 'Change Compared to Previous Day',
  selector: row => row.change,
  //sortable: true,
},
{
  name: 'Private Assets Worth',
  selector: row => row.privateWorth,
  //sortable: true,
},
{
  name: 'Source',
  selector: row => row.source,
  sortable: true,
},
{
  name: 'Country of Residence',
  selector: row => row.country,
  sortable: true,
},
];


function MyComponent(props) {
  console.log(props.apiData);
  var data = [];
  for (let i = 0; i < props.apiData.length; i++) {
    var person = {
      id:(i+1), 
      image:(<img src={props.apiData[i].person.squareImage} width="120" height="120"></img>),
      rank:(props.apiData[i].rank),
      name:(props.apiData[i].person.name),
      netWorth:("$" + (props.apiData[i].finalWorth*1000000).toLocaleString()),
      yesterdayWorth:("$" + (props.apiData[i].estWorthPrev*1000000).toLocaleString()),
      change:(<NetWorthChange final={props.apiData[i].finalWorth} prev={props.apiData[i].estWorthPrev}/>),
      privateWorth:("$" + (props.apiData[i].privateAssetsWorth*1000000).toLocaleString()),
      source:(props.apiData[i].source),
      country:(props.apiData[i].countryOfCitizenship)
    };
    data.push(person);
  }
  return (
      <DataTable
          columns={columns}
          data={data}
      />
  );
};


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
          <h3>&thinsp; This page uses an API to automatically update daily to reflect the richest 400 people on Earth. You can find many interesting facts throughout the table and choose to sort some of the columns if you'd like!</h3>
          <div class="table-container p-5">
          <MyComponent apiData = {this.state.data}/>
          </div>
        </div>
      );
    } 
}
export default Finance;

