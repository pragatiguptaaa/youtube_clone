import {configureStore} from '@reduxjs/toolkit';

import menuSlice from './menuSlice';
import searchSuggestionsCacheSlice from './searchSuggestionsCacheSlice';
import liveChatSlice from './liveChatSlice';

const store = configureStore({
    reducer:{
        menu: menuSlice,
        searchSuggestionsCache: searchSuggestionsCacheSlice,
        liveChat: liveChatSlice
    }
});
export default store;