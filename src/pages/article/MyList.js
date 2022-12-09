import { Box, Grid, Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import ConnectModule from "../../services/itsse.axios";
import { useEffect, useState } from "react";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";

const useStyles = makeStyles({
  ArticleListWrapper: {
    marginTop: "1.2rem",
  },
  buttonWrapper: {
    textAlign: "right",
  },
});

const MyList = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const registerArticle = () => {
    navigate("/article/register");
  };

  useEffect(() => {
    ConnectModule.sendGet(
      "/api/article/list?",
      "author=shelter0420@naver.com",
      setArticleData
    );
  }, []);

  const setArticleData = (response) => {
    const result = response.data;
    setArticles(result);
    console.log("setArticles", articles);
  };

  return (
    <div>
      <div>
        <h1>
          <AcUnitRoundedIcon style={{ fontSize: "24px" }} />
          나의 글 목록
        </h1>
        <div className={classes.buttonWrapper}>
          <Button
            variant="contained"
            endIcon={<CreateIcon />}
            onClick={registerArticle}
          >
            새글
          </Button>
        </div>
      </div>
      <div className={classes.ArticleListWrapper}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              width: "100%",
              height: "auto",
            },
          }}
        >
          {articles &&
            articles.map((item) => {
              return (
                <Paper
                  elevation={2}
                  style={{ marginBottom: "12px", padding: "18px" }}
                >
                  <div>
                    <span style={{ fontSize: "36px", fontWeight: "bold" }}>
                      {item.title}
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>작성자 : {item.author.name}</p>
                    <p>({item.author.uid})</p>
                  </div>
                  <div>
                    <span>작성일시 : {item.createdAt}</span>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.contents }}
                    style={{
                      marginTop: "18px",
                      background: "beige",
                      padding: "12px",
                    }}
                  />
                </Paper>
              );
            })}
        </Box>
      </div>
    </div>
  );
};

export default MyList;
