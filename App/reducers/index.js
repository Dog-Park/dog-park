import { combineReducers } from 'redux'
import { Pages, SET_PAGE, setPage } from '../actions/index.js'
const { GOTO_MAP } = Pages

function changePage(state = GOTO_MAP, action) {
  if (action.type === SET_PAGE ) {
  	return action.page;  /// pass state as well with spread operator
  }
  else
  	return state;
}

const rootReducer = combineReducers({
	changePage
})

export default rootReducer;