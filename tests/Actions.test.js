import { SET_PAGE, Pages, setPage } from '../App/actions/index'

describe('actions', () => {
  it('should create an action to change pages', () => {
    const page = 'GOTO_HOME'
    const expectedAction = {
      type: SET_PAGE,
      page
    }
    expect(setPage(page)).toEqual(expectedAction)
  })
})