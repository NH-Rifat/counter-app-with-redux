import { DECREMENT, INCREMENT, RESET } from "../constant/CounterConstant";

const initialState = { count: 0 };

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default CounterReducer;