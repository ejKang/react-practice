import React, { Component } from 'react';
import shallowEqual from 'shallow-equal';
class ShallowEqualTest extends Component {
  render() {
    const obj = { name: 'park' };
    const mylist = [1, 2, 3, obj];
    const list1 = [1, 2, 3, obj];
    const list2 = [1, 2, 3, { name: 'park' }];

    if (mylist === list1) {
      // false
    }

    if (shallowEqual(mylist, list1)) {
      // true
    }

    if (shallowEqual(list1, list2)) {
      // false
    }

    return <div></div>;
  }
}

export default ShallowEqualTest;
