import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.hnpwa.com/v0/",
});

export let fetchNewsList = () => {
  return axios.get("newest/1.json");
};

export let fetchAskSList = () => {
  return axios.get("ask/1.json");
};

export let fetchJobsList = () => {
  return axios.get("jobs/1.json");
};

export let fetchUserInfo = (userName) => {
  return axios.get(`user/${userName}.json`);
};
