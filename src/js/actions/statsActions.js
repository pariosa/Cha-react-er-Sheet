import {
  UPDATE_STAT,
  UPDATE_TEMP_STAT
} from "../constants/actionTypes";

export const updateStat = stat => ({
  type:"UPDATE_STAT",
  payload:stat
});
export const updateTempStat = stat => ({
  type:"UPDATE_TEMP_STAT",
  payload:stat
})