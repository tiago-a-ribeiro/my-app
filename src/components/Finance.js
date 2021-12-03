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

//function netWorthString(props) {
  //const netWorth = (props.finalWorth*1000000);
  //return <td class={netWorth.toLocaleString()} </td>;
//}



function sortTableByColumn(table, column, asc = true){
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  const sortedRow = rows.sort((a,b) => {
    const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
    const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
    
    console.log(aColText);
    console.log(bColText);
    
    //console.log(a);
    //console.log(b);
  });
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
      image:(<img src={props.apiData[i].person.squareImage} width="150" height="150"></img>),
      rank:(props.apiData[i].rank),
      name:(props.apiData[i].person.name),
      netWorth:((props.apiData[i].finalWorth*1000000).toLocaleString()),
      //netWorth:(props.apiData[i].finalWorth*1000000),
      yesterdayWorth:((props.apiData[i].estWorthPrev*1000000).toLocaleString()),
      //yesterdayWorth:(props.apiData[i].estWorthPrev*1000000),
      change:(<NetWorthChange final={props.apiData[i].finalWorth} prev={props.apiData[i].estWorthPrev}/>),
      privateWorth:((props.apiData[i].privateAssetsWorth*1000000).toLocaleString()),
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


//sortTableByColumn(document.querySelector("table"), 1);

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
          <MyComponent apiData = {this.state.data}/>
            <table class="table is-hoverable table-sortable">
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

