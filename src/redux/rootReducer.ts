import { combineReducers } from 'redux';
import main from './main/main.reducer';
import modals from './modal/modal.reducer';

const rootReducer = combineReducers({
  main,
  modals,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
