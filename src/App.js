import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import ButtonsPage from './containers/Buttons';
import CheckboxPage from './containers/Checkbox';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Link to='/button' className='link'>Button</Link>
          <Link to='/checkbox' className='link'>Checkbox</Link>
          <Link to='/clipboard' className='link'>Clipboard</Link>
          <Link to='/file' className='link'>File</Link>
          <Link to='/input' className='link'>Input</Link>
          <Link to='/modal' className='link'>Modal</Link>
          <Link to='/select' className='link'>Select</Link>
          <Link to='/textarea' className='link'>Textarea</Link>
        </header>
        <div className='App-main'>
          <Route path='/button' component={ButtonsPage} />
          <Route path='/checkbox' component={CheckboxPage} />
        </div>
      </div>
    );
  }
}

export default App;
