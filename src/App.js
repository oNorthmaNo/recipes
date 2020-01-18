import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { configureStore } from './redux/store/configureStore';
import MenuContainer from './containers/menuContainer';

//pages
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Top10 from './pages/Top10';
import RecipesDetails from './pages/RecipesDetails';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
// Create a Store from the Configuration, we can pass a Initial State here

const store = configureStore();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <div>
            <MenuContainer />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/recepten" component={Recipes} />
              <Route path="/details/:id" component={RecipesDetails} />
              <Route path="/top10" component={Top10} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Provider>
      </React.Fragment>
      );
  }
}

export default App;
