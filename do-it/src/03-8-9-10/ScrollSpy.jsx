import React, { PureComponent } from 'react';

class ScrollSpy extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    window.addEventListener('scroll', this.checkPosition);
  }
  componentDidMount() {
    this.checkPosition();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }
  setRef(ref) {
    this.ref = ref;
    console.log('set ref called !');
  }
  checkPosition() {
    if (this.ref !== undefined) {
      if (this.ref.getBoundingClientRect().top < window.innerHeight) {
        console.log('enter');
      } else {
        console.log('exit');
      }
    }
  }
  render() {
    return (
      <div ref={this.setRef}>
        <label>fff</label>
        <br />
        <label>fff</label>
        <br />
      </div>
    );
  }
}

export default ScrollSpy;
