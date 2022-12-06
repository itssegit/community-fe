import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import { makeStyles } from "@mui/styles";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EditorComponent from "./EditorComponent";
import ConnectModule from "../../services/itsse.axios";

const useStyles = makeStyles({
  buttonWrapper: {
    textAlign: "right",
  },
  ml_4: {
    marginLeft: "4px",
  },
  mb_12: {
    marginBottom: "1.2rem",
  },
});

const ArticleRegister = () => {
  //
  const classes = useStyles();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onEditorChange = (value) => {
    setContent(value);
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const saveArticle = useCallback(() => {
    //
    const articleInfoToSave = {
      title,
      content,
      author: "shelter0420@naver.com",
    };

    ConnectModule.sendPost("/api/article/register", articleInfoToSave);
  }, [title, content]);

  const moveToMyList = useCallback(() => {
    //
    navigate("/article/mylist");
  }, []);

  return (
    <div>
      <h1>새로운 이야기를 작성해주세요.</h1>
      <div className={classes.mb_12}>
        <TextField
          className="w-full"
          style={{ width: "100%" }}
          id="input-with-icon-textfield"
          label="제목을 입력해주세요! (필수)"
          onChange={onTitleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AutoStoriesTwoToneIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </div>
      <div>
        <EditorComponent value={content} onChange={onEditorChange} />
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          onClick={saveArticle}
          style={{ marginLeft: "4px" }}
        >
          저장
        </Button>
        <Button
          variant="contained"
          onClick={moveToMyList}
          style={{ marginLeft: "4px" }}
          color="success"
        >
          목록으로
        </Button>
      </div>
    </div>
  );
};

export default ArticleRegister;
