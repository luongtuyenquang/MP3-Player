import { ACTIVE_SONG } from "../constants"

export const activeSong = index => {
    return {
        type: ACTIVE_SONG,
        index
    }
}
