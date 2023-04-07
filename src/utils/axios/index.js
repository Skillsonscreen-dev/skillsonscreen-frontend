import Axios from "axios";

const REACT_APP_SERVER_HOST = process.env.REACT_APP_SERVER_HOST;
console.log("HOST", REACT_APP_SERVER_HOST);

let baseURL;

// https://cholatrek.herokuapp.com
// https://api.cholatrek.io

if (REACT_APP_SERVER_HOST) {
  baseURL = `${REACT_APP_SERVER_HOST}/`;
} else {
  const host = "http://localhost:4000/v1";
  baseURL = `${host}/`;
}

const AxiosCall = async (requestObj) => {
  const { path, method, data, contentType = "application/json", version = "", custormBaseURL = null} = requestObj;

  const token = localStorage.getItem("authToken");

  const headers = {
    "Content-Type": contentType,
    "Authorization": "Bearer "+ token
  };

  baseURL = "http://localhost:4000/v1"
 

  const url = version ? `${baseURL}${version}/${path}` : `${baseURL}${path}`;
  try {
    const response = await Axios({ method, url, data, headers, json: true });
    const result = response && response.data

    return result;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      localStorage.setItem("authToken", "");
      const currentPath = window.location.href.replace(window.location.host, '').replace(window.location.protocol + '//', '')
      const urlEncoded = encodeURIComponent(currentPath)
      window.location.href = `/signin?redirect=${urlEncoded}`;
    }
    throw error;
  }
};

export default AxiosCall;