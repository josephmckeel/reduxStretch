const { spookyTypes } = require('./types');

const initialState = {
  // code initial state here
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // code case statements here
    default:
      return state;
  }
};

module.exports = rootReducer;
