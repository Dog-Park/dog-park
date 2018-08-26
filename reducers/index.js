import { Pages } from '../actions'

const gotoPage = (state = Pages.GOTO_MAP, action) => {
  switch (action.type) {
    case 'GOTO_HOME':
    case 'GOTO_MAP':
    case 'GOTO_SETTINGS':
      return action.type;
    default:
      return state
  }
}

export default gotoPage;