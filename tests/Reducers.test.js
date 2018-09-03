import reducer from '../App/reducers/index'
import { Pages, SET_PAGE } from '../App/actions/index'

describe('pages reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        changePage: 'GOTO_MAP'
      }
    )
  })

  it('should handle SET_PAGE', () => {
    expect(
      reducer({}, {
        type: SET_PAGE,
        page: Pages.GOTO_HOME
      })
    ).toEqual(
      {
        changePage: 'GOTO_HOME'
      }
    )

    expect(
      reducer({},
        {
          type: SET_PAGE,
          page: Pages.GOTO_SETTINGS
        }
      )
    ).toEqual(
      {
        changePage: 'GOTO_SETTINGS'
      }
    )
  })
})