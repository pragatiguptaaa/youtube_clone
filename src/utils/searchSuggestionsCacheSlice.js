import {createSlice} from '@reduxjs/toolkit'

const searchSuggestionsCacheSlice = createSlice({
     name: "searchSuggestionsCache",
     initialState: {
        cache:{}
     },
     reducers:{
        addSearchSuggestions:(state, action)=>{
           state = Object.assign(state, action.payload);
        }
     }
});

export const {addSearchSuggestions} = searchSuggestionsCacheSlice.actions;
export default searchSuggestionsCacheSlice.reducer;