import { createAction } from "@ngrx/store"

export const isTracked = createAction("[trackedStream]")
export const micOff = createAction("[micOff]")
export const micOn = createAction("[micOn]")
export const camOff = createAction("[camOff]")
export const camOn = createAction("[camOn]")
 