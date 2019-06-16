import React, { Component } from 'react';
import gibbs from './assets/gibbs.jpg';
import abby from './assets/abby.jpg';
import bishop from './assets/bishop.jpg';
import tony from './assets/tony.jpg';
import mcgee from './assets/mcgee.jpg';
import toress from './assets/toress.jpg';
import ziva from './assets/ziva.jpg';


export class Home extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      home: {}
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getHomeContent')
    .then(res => res.json())
    .then(home => this.setState({ home }))
  }

  render() {
    const { home } = this.state;

    return (
      <div>
        <hr />
        <p><img src={gibbs} class="img-thumbnail" alt="Gibbs" /></p>
        <h2>{home.title1}</h2>
        <p>{home.content1}</p><hr />
        <p><img src={tony} class="img-thumbnail" alt="tony" /></p>
        <h2>{home.title2}</h2>
        <p>{home.content2}</p><hr />
        <p><img src={mcgee} class="img-thumbnail" alt="mcgee" /></p>
        <h2>{home.title3}</h2>
        <p>{home.content3}</p><hr />
        <p><img src={ziva} class="img-thumbnail" alt="ziva" /></p>
        <h2>{home.title4}</h2>
        <p>{home.content4}</p><hr />
        <p><img src={bishop} class="img-thumbnail" alt="bishop" /></p>
        <h2>{home.title5}</h2>
        <p>{home.content5}</p><hr />
        <p><img src={toress} class="img-thumbnail" alt="toress" /></p>
        <h2>{home.title6}</h2>
        <p>{home.content6}</p><hr />
        <p><img src={abby} class="img-thumbnail" alt="abby" /></p>
        <h2>{home.title7}</h2>
        <p>{home.content7}</p><hr />
      </div>
    );
  }
}
