

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";


export const addCount = (payload) => ({type: INCREMENT_COUNTER , payload}) ;
export const reduceCount = (payload) => ({type: DECREMENT_COUNTER , payload}) ;

