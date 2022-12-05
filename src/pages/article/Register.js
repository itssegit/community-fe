import { Button } from "@mui/material";
import { useState, useCallback } from "react";
import Editor from "./EditorComponent";
import axios from "axios";
import AxiosModule from "../../services/itsse.axios";

const ArticleRegister = () => {
  const [desc, setDesc] = useState("");
  const am = AxiosModule();
  function onEditorChange(value) {
    setDesc(value);
  }

  const sendPost = (url, data, callback) => {
    //
    const token = window.localStorage.getItem("token");
    console.log("in send post", token);
    const config = {
      "Content-Type": "application/json",
      headers: {
        //Authorization: `Bearer ` + token,
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
        if (error.response.status === 403) {
          window.location.href = "/user/login";
        }
      })
      .then((result) => {
        console.log("after axios network, must execute");
      });
  };

  const saveArticle = useCallback(() => {
    //
    sendPost("/api/article/register", desc);
  }, [desc]);

  return (
    <div>
      <Editor value={desc} onChange={onEditorChange} />
      <Button variant="contained" onClick={saveArticle}>
        저장
      </Button>
    </div>
  );
};

export default ArticleRegister;
