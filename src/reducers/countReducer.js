import * as types from '../types';

const countReducer = (state = 0, action) => {
    switch(action.type) {
        case types.INCREASE:
            return state += 1;
        case types.DECREASE:
            return state -= 1;
        default:
            return state;
    }
}

export default countReducer;