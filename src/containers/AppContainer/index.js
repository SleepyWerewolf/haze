import { connect } from 'react-redux';
import { launchGame } from '../../actions';
import App from '../../components/App';

const mapStateToProps = state => {
  const { url, isLaunching } = state.game;
  return {
    gameUrl: url,
    isGameLaunching: isLaunching
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchLaunchGame(game) {
    dispatch(launchGame(game));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
