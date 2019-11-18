import {shallow} from 'enzyme';
import GameTimer from './game-timer';

describe(`GameTimer should work correctly`, () => {

  it(`GameTimer call onTick every second`, (done) => {
    const onTickHandler = jest.fn();
    const onTimeEndHandler = jest.fn();

    shallow(<GameTimer
      time={10}
      onTick={onTickHandler}
      onTimeEnd={onTimeEndHandler}
    />);

    setInterval(() => {
      expect(onTickHandler).toHaveBeenCalledTimes(2);
      done();
    }, 2100);
  });

  it(`GameTimer call onTimeEnd if time < 0`, () => {
    const onTickHandler = jest.fn();
    const onTimeEndHandler = jest.fn();

    const wrapper = shallow(<GameTimer
      time={10}
      onTick={onTickHandler}
      onTimeEnd={onTimeEndHandler}
    />);

    wrapper.setProps({time: 0});
    expect(onTimeEndHandler).toHaveBeenCalledTimes(0);

    wrapper.setProps({time: -1});
    expect(onTimeEndHandler).toHaveBeenCalledTimes(1);
  });
});
