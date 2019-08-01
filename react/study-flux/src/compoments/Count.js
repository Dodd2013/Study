import React from 'react';
import CountStore from '../CountStore';
export default class Count extends React.Component {
  state = { count: CountStore.getState().count };
  componentDidMount() {
    CountStore.addListener(e => {
      this.setState(CountStore.getState());
    });
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}
