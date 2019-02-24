import React from 'react';
import Dropzone from 'react-dropzone'

const ReactDropzone = props => (
  <Dropzone onDrop={props.onDrop}>
    {({getRootProps, getInputProps, isDragActive}) => {
      return (
        <div
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop files here...</p> :
              <p>Try dropping some files here, or click to select files to upload.</p>
          }
        </div>
      )
    }}
  </Dropzone>
);

export default ReactDropzone;
