import * as actionTypes from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.BUG_RESOLVED:
      return {
        ...state,
        bugs: {
          ...state.bugs,
          [action.payload.id]: {
            ...state.bugs[action.payload.id],
            resolved: true,
          },
        },
      };
    case actionTypes.BUG_ADDED: {
      const bugId = uuidv4();
      return {
        ...state,
        bugs: {
          ...state.bugs,
          [bugId]: {
            resolved: false,
            id: bugId,
            title: action.payload.title,
          },
        },
      };
    }
    case actionTypes.BUG_REMOVED: {
      console.log('id = ', action.payload.id);
      const actualState = { ...state, bugs: { ...state.bugs } };
      console.log(actualState);
      console.log('bug to delete = ', actualState.bugs[action.payload.id]);
      delete actualState.bugs[action.payload.id];
      console.log('after delete = ', actualState);
      return actualState;
    }

    default:
      return state;
  }
};
import * as actionTypes from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.BUG_RESOLVED:
      return {
        ...state,
        bugs: {
          ...state.bugs,
          [action.payload.id]: {
            ...state.bugs[action.payload.id],
            resolved: true,
          },
        },
      };
    case actionTypes.BUG_ADDED: {
      const bugId = uuidv4();
      return {
        ...state,
        bugs: {
          ...state.bugs,
          [bugId]: {
            resolved: false,
            id: bugId,
            title: action.payload.title,
          },
        },
      };
    }
    case actionTypes.BUG_REMOVED: {
      console.log('id = ', action.payload.id);
      const actualState = { ...state, bugs: { ...state.bugs } };
      console.log(actualState);
      console.log('bug to delete = ', actualState.bugs[action.payload.id]);
      delete actualState.bugs[action.payload.id];
      console.log('after delete = ', actualState);
      return actualState;
    }

    default:
      return state;
  }
};
