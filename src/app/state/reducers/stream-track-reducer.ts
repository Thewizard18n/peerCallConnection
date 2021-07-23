import { createReducer, on } from "@ngrx/store"
import { isTracked } from "../actions/stream-track"

export const trackStream = false

const _streamTrackReducer = createReducer(
  trackStream,
  on(isTracked, (state) => true)
)

export const streamTrack = (state:any , action:any) => {
  return _streamTrackReducer(state , action)
}