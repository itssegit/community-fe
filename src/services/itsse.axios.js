/**
 * axios http connection common module
 */

import axios from "axios";

class ConnectModule {
  //
  sendPost = (url, data, callback) => {
    //
    const token = window.localStorage.getItem("token");
    //
    console.log("in send post", token);
    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: token,
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
        if (error.response.status === 403 || error.response.status === 401) {
          window.location.href = "/user/login";
        }
      })
      .then((result) => {
        console.log("after axios network, must execute");
      });
  };
}

const instance = new ConnectModule();

export default instance;
