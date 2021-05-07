import React, { PureComponent } from 'react';

export default class Text extends PureComponent {
  render() {
    const { children } = this.props;
    return <span>{children}</span>;
  }
}
