import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import ButtonsPage from './containers/Buttons';
import CheckboxPage from './containers/Checkbox';
import ClipboardPage from './containers/Clipboard';
import FilesPage from './containers/Files';
import InputsPage from './containers/Inputs';
import ModalPage from './containers/Modal';
import SelectPage from './containers/Select';
import TextareaPage from './containers/Textarea';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Link to='/button' className='link'>Button</Link>
          <Link to='/checkbox' className='link'>Checkbox</Link>
          <Link to='/clipboard' className='link'>Clipboard</Link>
          <Link to='/files' className='link'>Files</Link>
          <Link to='/input' className='link'>Input</Link>
          <Link to='/modal' className='link'>Modal</Link>
          <Link to='/select' className='link'>Select</Link>
          <Link to='/textarea' className='link'>Textarea</Link>
        </header>
        <div className='App-main'>
          <Route path='/button' component={ButtonsPage} />
          <Route path='/checkbox' component={CheckboxPage} />
          <Route path='/clipboard' component={ClipboardPage} />
          <Route path='/files' component={FilesPage} />
          <Route path='/inputs' component={InputsPage} />
          <Route path='/modals' component={ModalPage} />
          <Route path='/selects' component={SelectPage} />
          <Route path='/textareas' component={TextareaPage} />
        </div>
      </div>
    );
  }
}

export default App;
