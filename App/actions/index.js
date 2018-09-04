/*   Actions   */
export const SET_PAGE = 'SET_PAGE';

/*   Constants   */
export const Pages = {
  GOTO_HOME: 'GOTO_HOME',
  GOTO_MAP: 'GOTO_MAP',
  GOTO_SETTINGS: 'GOTO_SETTINGS'
}

/*   Action Creators   */
export function setPage(page) {
  return { type: 'SET_PAGE', page };
}