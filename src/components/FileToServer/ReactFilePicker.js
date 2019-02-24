import React from 'react';
import { FilePicker } from 'react-file-picker';

const FilesPicker = props => (
  <FilePicker
      extensions={['jpg', 'jpeg', 'png', 'psd', 'doc', 'xls']}
      onChangeHandler={file => props.onChangeHandler(file)}
      onError={props.onErrorHandler}
  >
      {props.children}
  </FilePicker>
);

export default FilesPicker;