import React, { Component } from 'react'

export class Contact extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      contact: {}
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getContactContent')
    .then(res => res.json())
    .then(contact => this.setState({ contact }))
  }

  render() {
    const { contact } = this.state;

    return (
      <div align='center'>
        <h2>{contact.title}</h2>
        <p>{contact.content1}</p>
        <p>{contact.content2}</p>
        <p>{contact.content3}</p>
      </div>
    );
  }
}
