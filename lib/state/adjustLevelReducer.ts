type AdjustLevelState = {
  loading: boolean
  error: string | null
  adjustClicked: boolean
  selectedLevel: number | null
  adjustCompleted: boolean
}

type AdjustLevelAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'TOGGLE_ADJUST_CLICKED' }
  | { type: 'SET_SELECTED_LEVEL'; payload: number | null }
  | { type: 'RESET_STATE' }
  | { type: 'SET_ADJUST_COMPLETED'; payload: boolean }

export const initialAdjustLevelState: AdjustLevelState = {
  loading: false,
  error: null,
  adjustClicked: false,
  selectedLevel: null,
  adjustCompleted: false
}

export const adjustLevelReducer = (
  state: AdjustLevelState,
  action: AdjustLevelAction
) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'SET_ADJUST_COMPLETED':
      return { ...state, adjustCompleted: action.payload }
    case 'TOGGLE_ADJUST_CLICKED':
      return { ...state, adjustClicked: !state.adjustClicked }
    case 'SET_SELECTED_LEVEL':
      return { ...state, selectedLevel: action.payload }
    case 'RESET_STATE':
      return {
        ...state,
        loading: false,
        error: null,
        adjustClicked: false,
        selectedLevel: null
      }
    default:
      return state
  }
}
