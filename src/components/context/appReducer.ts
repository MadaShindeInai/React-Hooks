import {COUNT_UP, COUNT_ZERO, COUNT_DOWN} from '../../constants';
type StateType = {
  count: number;
  id: string;
};

const appReducer = (state: StateType, action: {type: string, payload: number}) => {
  switch (action.type){
    case COUNT_UP:
      return {
        ...state,
        count: state.count + action.payload
      }
    case COUNT_DOWN:
      return {
        ...state,
        count: state.count - action.payload,
      }
    case COUNT_ZERO:
      return {
        count: 0,
        id: Date.now().toString()
      }
    default:
      return state;
  }
};

export default appReducer;