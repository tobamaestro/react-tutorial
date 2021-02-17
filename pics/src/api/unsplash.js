import axios from "axios";

const UNSPLASH_API = "https://api.unsplash.com";

//  Preconfigured instance of axios to reuse
export default axios.create({
  baseURL: UNSPLASH_API,
  headers: {
    Authorization: "Client-ID XdKpr7aaqFPrhVYj9Aq_8nA3h3deIhv3Aett39Ku9xQ",
  },
});
