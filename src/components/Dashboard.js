import React, { Component } from 'react'
import { Bar,Pie,Line } from 'react-chartjs-2';

export class Dashboard extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getDashboardContent')
    .then(res => res.json())
    .then(data => this.setState({ data }))
  }

  render() {
    const { data } = this.state;

    return (
      <div>
          <h1 align="center">Bar representation </h1><br />
          <div className="Bar"><Bar data={data} /></div><hr /><br />
          <h1 align="center">Pie representation </h1><br />
        <div className="Pie"><Pie data={data} /></div><hr /><br />
        <h1 align="center">Line representation </h1><br />
        <div className="Line"><Line data={data} /></div><hr />
      </div>
      );
    }
  }