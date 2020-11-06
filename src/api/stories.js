import axios from "axios";

export function getStories() {
  return axios.get("https://www.thequint.com/api/v1/stories", {
    headers: {
      "Access-Control-Allow-Origin": true,
    },
  });
}
