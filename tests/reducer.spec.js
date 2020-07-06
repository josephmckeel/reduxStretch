const { createStore } = require('redux');
const rootReducer = require('../redux/reducers');
const { createNewSpookySound, incrementStep } = require('../redux/actions');

describe('store', () => {
  let spookyTestStore;
  beforeEach(() => {
    spookyTestStore = createStore(rootReducer);
  });

  it('Spooky store has an initial state of steps and spookySounds', () => {
    const newSpook = spookyTestStore.getState();
    expect(newSpook.steps).toEqual(0);
    expect(newSpook.spookySounds).toEqual([]);
  });

  describe('Spooky store receives action "incrementStep" and using reducer increments appropriate store value ', () => {
    beforeEach(() => {
      spookyTestStore.replaceReducer(() => ({
        steps: 0,
        spookySounds: ['Meow', 'BOO!', 'AHHHHHHHH!!!!', 'MUAHAHAH'],
      }));
      spookyTestStore.replaceReducer(rootReducer);
    });

    it(" Spooky store dispatches 'incrementStep", () => {
      spookyTestStore.dispatch(incrementStep());
      const newSpook = spookyTestStore.getState();
      expect(newSpook.steps).toEqual(1);
      expect(newSpook.spookySounds).toEqual([
        'Meow',
        'BOO!',
        'AHHHHHHHH!!!!',
        'MUAHAHAH',
      ]);
    });
  });

  describe('Spooky store receives action "createNewSpookySounds" and using reducer adds appropriate store value', () => {
    beforeEach(() => {
      spookyTestStore.replaceReducer(() => ({
        steps: 0,
        spookySounds: ['Meow', 'BOO!', 'AHHHHHHHH!!!!', 'MUAHAHAH'],
      }));
      spookyTestStore.replaceReducer(rootReducer);
    });

    it("Spooky store dispatches 'createNewSpookySounds' with 'creaky door'", () => {
      spookyTestStore.dispatch(createNewSpookySound('creaky door'));
      const newSpook = spookyTestStore.getState();
      expect(newSpook.steps).toEqual(0);
      expect(newSpook.spookySounds).toEqual([
        'Meow',
        'BOO!',
        'AHHHHHHHH!!!!',
        'MUAHAHAH',
        'creaky door',
      ]);
    });

    it("Spooky store dispatches 'createNewSpookySounds' with 'Dracula laugh' to new array from previous state and replacing the old store data", () => {
      const originalSpook = spookyTestStore.getState();
      spookyTestStore.dispatch(createNewSpookySound('Dracula laugh'));
      const modifiedSpook = spookyTestStore.getState();
      expect(originalSpook.spookySounds).not.toBe(modifiedSpook.spookySounds);
      expect(modifiedSpook.spookySounds).toHaveLength(5);
    });
  });
});
