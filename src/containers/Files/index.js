import React from 'react';

import { ReactDropzone, ReactFilePicker } from '../../components/FileToServer';
// import Button from '../../components/Button';

export default class Files extends React.Component {
  onChangeHandler = (files) => {
    // console.log('filesfiles', files);
  }


  onDrop = async (acceptedFiles, rejectedFiles) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    // const result = await uploadOrderDocument(token, formData);

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
