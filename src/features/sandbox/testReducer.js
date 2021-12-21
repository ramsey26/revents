const INCREAMENT_COUNTER = "INCREAMENT_COUNTER";
const DECREAMENT_COUNTER = "DECREAMENT_COUNTER";

export function increament(amount){
    return{
        type:INCREAMENT_COUNTER,
        payload:amount
    }
}

export function decreament(amount){
    return{
        type:DECREAMENT_COUNTER,
        payload:amount
    }
}

const initialState = {
  data: 42,
};

export default function testReducer(state = initialState, {type,payload}) {
  switch (type) {
    case INCREAMENT_COUNTER:
      return {
        ...state,
        data: state.data + payload,
      };
    case DECREAMENT_COUNTER:
      return {
        ...state,
        data: state.data - payload,
      };
    default:
      return state;
  }
}
