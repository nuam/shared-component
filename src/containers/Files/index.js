import React from 'react';

import { ReactDropzone, ReactFilePicker } from '../../components/FileToServer';
// import Button from '../../components/Button';

export default class Files extends React.Component {
  onChangeHandler = (files) => {
    // console.log('filesfiles', files);
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    console.log('acceptedFilesacceptedFilesacceptedFiles', acceptedFiles);
  }

  render() {
    return (
      <div>
        <ReactFilePicker
          onChangeHandler={this.onChangeHandler}
          onErrorHandler={() => { }}
        >
          <span>
            Upload document
          </span>
        </ReactFilePicker>

        <ReactDropzone onDrop={this.ondrop}/>
      </div>
    )
  }
}
