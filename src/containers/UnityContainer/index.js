import { connect } from 'react-redux';
import UnityGame from '../../components/UnityGame';
import { gameLaunching } from '../../actions';

const mapStateToProps = state => {
  const { url } = state.game;
  return { url };
};
const mapDispatchToProps = dispatch => {
  return {
    isGameLaunching(isLaunching) {
      dispatch(gameLaunching(isLaunching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnityGame);
