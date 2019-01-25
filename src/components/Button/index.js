import React from 'react';

import './styles.scss'
export default class Button extends React.Component {
  render() {
    const { classes, styles, clickHandler } = this.props;
    return (
      <button
        className={`my-btn ${classes}`}
        style={styles}
        onClick={clickHandler}
      >
        Button Example
      </button>
    )
  }
}