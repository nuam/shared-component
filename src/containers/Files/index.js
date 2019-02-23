import React from 'react';

import FilePicker from '../../components/FileToServer';
import Button from '../../components/Button';


export default class Files extends React.Component {
  render() {
    return (
      <div>
        <FilePicker
          onChangeHandler={this.onChangeHandler}
          onErrorHandler={() => { }}
        >
          <Button>
            Upload document
          </Button>
        </FilePicker>
      </div>
    )
  }
}