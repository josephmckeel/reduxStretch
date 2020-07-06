const { spookyTypes } = require("./types");

//code actions here
function incrementStep() {
  return {
    type: "ADD_STEP",
  };
}

function createNewSpookySound() {
  return {
    type: "NEW_SOUND",
  };
}

module.exports = {
  incrementStep,
  createNewSpookySound,
};
