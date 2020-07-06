const { spookyTypes } = require("./types");

const initialState = {
  // code initial state here
  steps: 0,
  spookySounds: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case spookyTypes.ADD_STEP:
      return {
        ...state,
        steps: state.steps + 1,
      };
    case spookyTypes.NEW_SOUND:
      return {
        ...state,
        spookySounds: [...state.spookySounds, action.sound],
      };
    default:
      return state;
  }
};

module.exports = rootReducer;
