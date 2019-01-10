import React from 'react';

import './style.scss';

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    const { title } = this.props;

    return (
      <div className="c-modal__bcg">
        <div className="c-modal">
          <div className="c-modal__header">
            <div>
              {title}
            </div>
            <i
              className="material-icons font-weight-bold c-modal__close"
              onClick={this.props.onClose}
            >
              close
            </i>
          </div>

          <div className="c-modal__body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;