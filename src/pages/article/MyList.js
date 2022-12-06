import { Box, Grid, Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  ArticleListWrapper: {
    marginTop: "1.2rem",
  },
});

const MyList = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const registerArticle = () => {
    navigate("/article/register");
  };

  return (
    <div>
      <div>
        <h1>나의 글 목록</h1>
        <Button
          variant="contained"
          endIcon={<CreateIcon />}
          onClick={registerArticle}
        >
          새글
        </Button>
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
          <Paper elevation={2} />
        </Box>
      </div>
    </div>
  );
};

export default MyList;
