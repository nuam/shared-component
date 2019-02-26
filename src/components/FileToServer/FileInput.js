import React from 'react';

const FileInput = props => (
  <input type="file" onChange={(event) => props.onChange(event)} multiple />
);

export default FileInput;
