import React, { Component } from 'react';

export class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Lifecycle A'
    };
    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount');
  }

shouldComponentUpdate(nextProps, nextState) {
    console.log('LifecycleA shouldComponentUpdate');
    return true; // or false based on your condition
  }

getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null; // or some value to pass to componentDidUpdate
  }

componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('LifecycleA componentDidUpdate');
    // You can use snapshot here if needed mostly used methods.
  }
  render() {
    console.log('LifecycleA render');
    return (
      <div>LifecycleA</div>
    );
  }
}

export default LifecycleA;
