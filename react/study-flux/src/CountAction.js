import Dispatcher from './Dispatcher';
import CountActionTypes from './CountActionTypes';

const CountActions = {
  add() {
    console.log('action:add');
    Dispatcher.dispatch({
      type: CountActionTypes.Add
    });
  },
  subtract() {
    console.log('action:subtract');
    Dispatcher.dispatch({
      type: CountActionTypes.Subtract
    });
  }
};
export default CountActions;
