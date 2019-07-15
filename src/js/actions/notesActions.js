import{ 
    UPDATE_NOTES, 
} from "../constants/actionTypes"; 
  
export const updateNotes = notes =>({
    type: UPDATE_NOTES,
    payload: notes
});