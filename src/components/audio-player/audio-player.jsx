import PropTypes from 'prop-types';
import {Fragment} from 'react';
import {PureComponent} from 'react';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Fragment>
      <button
        className="track__button track__button--play"
        type="button"
      ></button>
      <div className="track__status">
        <audio controls src={this.props.src}/>
      </div>
    </Fragment>);
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired
};

export default AudioPlayer;
