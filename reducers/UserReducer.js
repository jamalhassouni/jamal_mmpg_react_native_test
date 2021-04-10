import actionTypes from "../actions/types";
const initialState = {
  users: [],
  user: {},
};

const UserReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload.users,
      };

    default:
      return state;
  }
};

export default UserReducer;
