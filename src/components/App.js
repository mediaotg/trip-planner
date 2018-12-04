import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import '../styles/App.css';

import Header from './Header';
import Suggestions from './Suggestions';
import SearchResults from './SearchResults';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentLocation: 0,
      search: {
        age: 'family',
        transport: 'car',
        distance: 3
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      var name = event.target.name;
      var search = this.state.search;
      search[name] = event.target.value;
      this.setState({
        search: search
      });
  }
  handleCheckbox(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      const search = this.state.search;
      search[name] = value;
      this.setState({
        search: search
      });
  }
  handleSubmit(event) {
      event.preventDefault();
      this.props.history.push('/search');
  }

  render() {
    const handlers = {
        handleChange: this.handleChange,
        handleCheckbox: this.handleCheckbox,
        handleSubmit: this.handleSubmit
    };  

    const search = {
      handlers: handlers,
      data: this.state.search
    }
    return (
      <div className="App">
        <Header value="Chol Hamoed Planner" />

        <Switch>
          <Route exact path='/' render={(props) => (
              <Suggestions search={search} />
            )} />
          <Route path='/search' render={(props) => (
              <SearchResults search={search} />
            )} />
        </Switch>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;
