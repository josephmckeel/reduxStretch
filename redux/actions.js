const { spookyTypes } = require("./types");

//code actions here
function incrementStep() {
  return {
    type: spookyTypes.ADD_STEP,
  };
}

function createNewSpookySound(sound) {
  return {
    type: spookyTypes.NEW_SOUND,
    sound,
  };
}

module.exports = {
  incrementStep,
  createNewSpookySound,
};
