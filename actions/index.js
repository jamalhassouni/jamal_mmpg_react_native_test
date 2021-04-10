import actionTypes from "./types";
// ACTIONS

/**
 *  set Users to global state
 * @param {Array} users
 */
export const setUsers = (users) => (dispatch) => {
  return dispatch({
    type: actionTypes.SET_USERS,
    payload: { users },
  });
};
/**
 *  set User to global state
 * @param {Array} users
 */
export const setUser = (user) => (dispatch) => {
  return dispatch({
    type: actionTypes.SET_USER,
    payload: { user },
  });
};
