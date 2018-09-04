import { connect } from 'react-redux';
import { MainView } from '../components/MainView.js';
import { setPage } from '../actions/index'
import { Dimensions } from 'react-native'

let screenWidth = Dimensions.get('window').width;

const findPage = (page) => {
  switch (page) {
    case 'GOTO_SETTINGS':
      return screenWidth * 2
    case 'GOTO_MAP':
      return screenWidth
    case 'GOTO_HOME':
    default:
      return 0
  }
}

const offsetToPage = (offset) => {
  switch (offset) {
    case (screenWidth * 2):
      return 'GOTO_SETTINGS'
    case (screenWidth):
      return 'GOTO_MAP'
    case 0:
    default:
      return 'GOTO_HOME'
  }
}

const mapStateToProps = state => {
  return {
    currentPage: findPage(state.changePage)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    change: page => {
      dispatch(setPage(offsetToPage(page)))
    }
  }
}

const MainViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView)

export default MainViewContainer