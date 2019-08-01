import React from 'react';
import CountActions from '../CountAction';

export default class Add extends React.Component {
  render() {
    return <button onClick={CountActions.add}>+</button>;
  }
}
