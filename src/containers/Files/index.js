import React from 'react';

import { FileInput, ReactDropzone } from '../../components/FileToServer';

export default class Files extends React.Component {
  onDrop = async (acceptedFiles, rejectedFiles) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    // const result = await uploadDocument(token, formData);
  }

  changeFile = (event) => {
    console.log('files', event.target.files);
  }

  render() {
    return (
      <div>
        <FileInput onChange={this.files} />

        <ReactDropzone onDrop={this.ondrop}/>
      </div>
    )
  }
}
