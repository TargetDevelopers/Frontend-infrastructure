import * as t from './main.constant';

const initialState = {
  name: '',
  data: null,
  errors: false,
  loading: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        name: 'ali',
      };
    case t.GET_USER_REQUEST:
      return {
        ...state,
        name: 'ali',
      };
    case t.GET_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case t.GET_USER_FAILURE:
      return {
        ...state,
        name: 'ali',
      };
    default:
      return { ...state };
  }
};

export default mainReducer;
