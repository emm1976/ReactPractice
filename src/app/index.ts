import { RootState } from 'app/rootReducer'
import { counterActions } from 'app/slices/counterSlice'
import { appDispatch } from 'app/store'

export type { RootState }
export { counterActions, appDispatch }