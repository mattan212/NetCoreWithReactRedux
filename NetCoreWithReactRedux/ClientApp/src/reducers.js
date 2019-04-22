import { actions } from "./actions";

const INITIAL_STATE = {
    counter: 0,
    data: {},
    isFetchingData: true,
    name: "world"
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.sayHello:
            return {
                ...state,
                name: action.name
            };
        case actions.incrementCounter:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actions.fetchingData:
            return {
                ...state,
                isFetchingData: true
            }
        case actions.retrievedData:
            return {
                ...state,
                data: action.data,
                isFetchingData: false
            }
        default:
            return state;
    }
};

export default reducer;