import React, { Component } from 'react'
import ncis from './assets/ncis.jfif';

export class About extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      about: {}
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getAboutContent')
    .then(res => res.json())
    .then(about => this.setState({ about }))
  }

  render() {
    const { about } = this.state;

    return (
      <div>
        <h2>{about.title}</h2>
        <p>{about.content1}</p>
        <p><img src={ncis} class="img-thumbnail" alt="ncis" /></p>
        <p>{about.content2}</p>
      </div>
    );
  }
}
