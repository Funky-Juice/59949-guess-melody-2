import {mount} from 'enzyme';
import withActivePlayer from './with-active-player';

describe(`HOC withActivePlayer should work correctly`, () => {
  let wrapper;
  const MockComponent = () => <div/>;
  const MockComponentWrapped = withActivePlayer(MockComponent);

  beforeEach(() => {
    wrapper = mount(<MockComponentWrapped/>);
  });

  it(`Should be paused on default`, () => {
    expect(wrapper.state().activePlayer).toBe(-1);
  });

  it(`Should set/unset activePlayerID correctly on play/pause button click`, () => {
    wrapper.instance()._playButtonClickHandler(0);
    expect(wrapper.state().activePlayer).toBe(0);

    wrapper.instance()._playButtonClickHandler(2);
    expect(wrapper.state().activePlayer).toBe(2);

    wrapper.instance()._playButtonClickHandler(-1);
    expect(wrapper.state().activePlayer).toBe(-1);
  });
});
