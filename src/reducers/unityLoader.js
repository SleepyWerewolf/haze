import { FETCH_UNITY_LOADER_SUCCESS } from '../constants/action-types';

const initialState = { isLoaded: false };

const unityLoader = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNITY_LOADER_SUCCESS:
      console.log(action);
      return {
        ...state
      };
    default:
      return state;
  }
};

export { unityLoader };
