import * as t from './modal.constant';

/**
 * Reducer
 * @param state
 * @param action
 * @returns {*}
 */
export const defaultState = [];

export default function modalsReducer(state = defaultState, action: any = {}) {
  switch (action.type) {
    case t.SHOW_MODAL:
      return [...state, action.payload];
    case t.HIDE_MODAL: {
      return action.payload;
    }
    case t.HIDE_ALL_MODALS:
      return [];
    default:
      return state;
  }
}
