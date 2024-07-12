// Action creators

import * as actionTypes from './actionTypes';

export const bugResolved = id => ({
  type: actionTypes.BUG_RESOLVED,
  payload: {
    id,
  },
});

export const bugAdded = title => ({
  type: actionTypes.BUG_ADDED,
  payload: {
    title,
  },
});

export const bugRemoved = id => ({
  type: actionTypes.BUG_REMOVED,
  payload: {
    id,
  },
});
