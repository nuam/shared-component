import React from 'react';
import Dropzone from 'react-dropzone'

const ReactDropzone = props => (
  <Dropzone
    onDrop={props.onDrop}
  >
    {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {props.children}
        </div>
    )}
  </Dropzone>
);

export default ReactDropzone;
