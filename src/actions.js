import * as ACTIONS from './constants/action-types';

export const fetchUnityLoader = game => ({
  type: ACTIONS.FETCH_UNITY_LOADER,
  game
});

export const fetchUnityLoaderSuccess = response => ({
  type: ACTIONS.FETCH_UNITY_LOADER_SUCCESS,
  response
});

export const fetchUnityLoaderFailure = error => ({
  type: ACTIONS.FETCH_UNITY_LOADER_FAILURE,
  error
});

export const gameLaunching = isLaunching => ({
  type: ACTIONS.GAME_LAUNCHING,
  isLaunching
});

export const launchGame = url => ({
  type: ACTIONS.LAUNCH_GAME,
  url
});
