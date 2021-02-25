import axios from "axios";

const API_KEY = "AIzaSyCqAY264T0CbCnsKeM_T4khsCLNrlcxIBA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: API_KEY,
  },
});
