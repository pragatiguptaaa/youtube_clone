//Note: Ideally, this should be configured in environment file.
const GOOGLE_API_KEY ="AIzaSyC9Xf0y546W82LBYlxXXmwPmrEsFFBUXo0";

//most poular videos
export const MOST_POPULAR_VIDEOS_YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=100&&regionCode=IN&key="+GOOGLE_API_KEY;

//search suggestions
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

//comments
export const YOUTUBE_COMMENTS_API="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key="+GOOGLE_API_KEY+"&videoId=_VB39Jo8mAQ";

//live chat
export const LIVE_CHAT_MESSGES_SIZE = 5;