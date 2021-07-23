import { createReducer, on } from "@ngrx/store"
import { refusedConnection } from "../actions/waiting-confirmation"

export const waitingConfirmation = true

const _connectionReducer = createReducer(
  waitingConfirmation,
  on(refusedConnection, (state) => false)
)

export const connection = (state:any , action:any) => {
  return _connectionReducer(state , action)
}