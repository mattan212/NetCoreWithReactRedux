export const actions = {
    sayHello: "SAY_HELLO",
    incrementCounter: "INCREMENT_COUNTER",
    incrementCounterAsync: "INCREMENT_COUNTER_ASYNC",
    fetchDataAsync: "FETCH_DATA_ASYNC",
    fetchingData: "FETCHING_DATA",
    retrievedData: "RETRIEVED_DATA"
};

export const sayHello = name => {
    return {
        type: actions.sayHello,
        name: name
    };
};

export const incrementCounter = () => {
    return {
        type: actions.incrementCounter
    };
};

export function incrementCounterAsync(timeoutMs) {    
    return function (dispatch) {
        setTimeout(() => dispatch(incrementCounter()), timeoutMs);
    };
};

//export function incrementAsync(delay: number = 1000) {
//    return (dispatch: (action: actionType) => void) => {
//        setTimeout(() => {
//            dispatch(increment());
//        }, delay);
//    };
//}


export const retrievedData = data => {
    return {
        type: actions.retrievedData,
        data: data
    };
};

export const fetchingData = () => {
    return {
        type: actions.fetchingData
    };
};

export function fetchDataAsync(url) {    
    return function (dispatch) {
        dispatch(fetchingData);
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(retrievedData(json)));
    };
};
