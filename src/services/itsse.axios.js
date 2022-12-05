/**
 * axios http connection common module
 */

import axios from "axios";

const AxiosModule = () => {
  /**
   * post method
   * 1) url
   * 2) send object
   */
  const sendPost = (url, data, callback) => {
    //
    const token = window.localStorage.getItem("token");
    console.log("in send post", token);
    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ` + token,
      },
    };
    console.log("data", data);
    axios
      .post(url, data, config)
      .then((response) => {
        console.log(response);
        if (callback) {
          callback(response);
        }
      })
      .catch((error) => {
        //console.log(error);
        if (error.response.status === 403) {
          window.location.href = "/user/login";
        }
      })
      .then((result) => {
        console.log("after axios network, must execute");
      });
  };

  const module = {
    sendPost,
  };

  return module;
};

export default AxiosModule;
