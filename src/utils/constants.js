//Note: Ideally, this should be configured in environment file.
const GOOGLE_API_KEY ="AIzaSyC9Xf0y546W82LBYlxXXmwPmrEsFFBUXo0";

export const MOST_POPULAR_VIDEOS_YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=100&&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+ GOOGLE_API_KEY +"&q=";