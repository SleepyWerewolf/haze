import { GAME_LAUNCHING, LAUNCH_GAME } from '../constants/action-types';

const initialState = {
  url: '',
  // url: '/games/space-shooter/Build/space-shooter.json',
  isLaunching: false
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case GAME_LAUNCHING:
      return {
        ...state,
        isLaunching: action.isLaunching
      };
    case LAUNCH_GAME:
      return {
        ...state,
        isLaunching: true,
        url: action.url
      }
    default:
      return state;
  }
};

export default game;
