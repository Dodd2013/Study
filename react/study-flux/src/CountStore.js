import { ReduceStore } from 'flux/utils';
import Dispatcher from './Dispatcher';
import CountActionTypes from './CountActionTypes';
class CountStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }
  getInitialState() {
    return { count: 0 };
  }
  reduce(state, action) {
    console.log('store:reduce');
    console.log(state);
    switch (action.type) {
      case CountActionTypes.Add:
        return { count: state.count + 1 };
      case CountActionTypes.Subtract:
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
}

export default new CountStore();
