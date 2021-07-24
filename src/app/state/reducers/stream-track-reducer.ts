import { createReducer, on } from "@ngrx/store"
import { isTracked ,micOff, micOn, camOff,camOn } from "../actions/stream-track"

export const trackStream = false
export const muted = false
export const unMuted = false
export const enableVideo = false
export const disableVideo = false

const _streamTrackReducer = createReducer(
  trackStream,
  on(isTracked, (state) => true),
)

export const streamTrack = (state:any , action:any) => {
  return _streamTrackReducer(state , action)
}
