import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  render() {
    const { children, disabled, onPress } = this.props;
    return (
      <button disabled={disabled} onClick={onPress}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};
Button.defaultProps = {
  onPress: () => {},
};
