import React, { Component } from 'react';

export class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleEmailChange = e =>{
        this.setState({email :e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password :e.target.value})
    }
    signIn(){
        alert('Email address is ' + this.state.email + ' Password is ' + this.state.password); 
        fetch('/api/signin',{
            method: 'GET',
            crendentials : 'include',
            headers: {  
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email : this.state.email,
                password: this.state.password}) 
        })
        .then(res => {
            return res.json();
        })
        .catch(error => console.log('failed',error))
        };
    render() {
        const { email, password} = this.state
        return (
            <form className="form-signin" method="POST" action='/api/signin'>
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.signIn}>Sign in</button>               
            </form>
        )
    }
}