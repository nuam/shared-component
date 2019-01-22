import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import ButtonsPage from './containers/Buttons';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <header className='App-header'> */}
          <Link to='/buttons'>Buttons</Link>

        {/* </header> */}
        <Route path='/buttons' component={ButtonsPage} />
      </div>
    );
  }
}

export default App;
