import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MESSGES_SIZE } from "./constants";

const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        chatMessages:[]
    },
    reducers:{
        addChatMessages: (state, action) =>{
            //remove all elements from index > LIVE_CHAT_MESSGES_SIZE i.e if its 5 then (0-5 elements will be there)
            state.chatMessages.splice(LIVE_CHAT_MESSGES_SIZE);

            //add in the fornt  -push is to add in the last
            state.chatMessages.unshift(action.payload);
        }
    }
});

export default liveChatSlice.reducer;
export const {addChatMessages} = liveChatSlice.actions;