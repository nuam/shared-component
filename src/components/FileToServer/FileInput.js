import React from 'react';

const FileInput = props => (
  <input
    type="file"
    className="input-file"
    onChange={(event) => props.onChange(event)}
    multiple
  />
);

export default FileInput;
