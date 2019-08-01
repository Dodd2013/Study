import React from 'react';
import CountActions from '../CountAction';
export default class Subtract extends React.Component {
  render() {
    return <button onClick={CountActions.subtract}>-</button>;
  }
}
