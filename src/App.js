import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Dashboard } from './components/Dashboard';
import { Signin } from './Signin'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/signin" component={Signin} />

            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;