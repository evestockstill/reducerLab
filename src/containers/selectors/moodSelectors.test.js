import { getFace } from './moodSelectors';

describe('mood selectors', () => {
  it('can return correct mad mood emoji', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const face = getFace(state);

    expect(face).toEqual('🤬');
  });
  it('can return correct happy mood emoji', () => {
    const state = {
      coffees: 1,
      snacks: 2,
      naps: 0,
      studies: 0
    };
    const face = getFace(state);

    expect(face).toEqual('😀');
  });
  it('can return correct happy mood emoji', () => {
    const state = {
      coffees: 0,
      snacks: 2,
      naps: 1,
      studies: 1
    };
    const face = getFace(state);

    expect(face).toEqual('😀');
  });
  it('can return correct mad mood emoji', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 3
    };
    const face = getFace(state);

    expect(face).toEqual('🤬');
  });
  it('can return correct hyper mood emoji', () => {
    const state = {
      coffees: 3,
      snacks: 0,
      naps: 0,
      studies: 3
    };
    const face = getFace(state);

    expect(face).toEqual('🤯');
  });
  it('can return correct nap mood emoji', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 3,
      studies: 0
    };
    const face = getFace(state);

    expect(face).toEqual('😡');
  });
  it('can return correct  mood emoji', () => {
    const state = {
      coffees: 0,
      snacks: 3,
      naps: 0,
      studies: 3
    };
    const face = getFace(state);

    expect(face).toEqual('😴');
  });
  it('can return correct sick mood emoji', () => {
    const state = {
      coffees: 3,
      snacks: -3,
      naps: 0,
      studies: 0
    };
    const face = getFace(state);

    expect(face).toEqual('😡');
  });
});
