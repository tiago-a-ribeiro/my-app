import React, { Component } from 'react'
import axios from 'axios';

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
          {this.state.data.map(data => <h3>{data.uri}</h3>)}
        </div>
      );
    }
}

export default Finance;