import { SET_PAGE } from '../actions/index.js';
import { connect } from 'react-redux';
import { NavigationBar } from '../components/NavigationBar.js';
import { setPage } from '../actions/index'

const mapStateToProps = state => {
  return {
    currentPage: state.changePage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    change: page => {
      dispatch(setPage(page))
    }
  }
}

const NavigationBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)

export default NavigationBarContainer