import { Box, Stack, Button, TextField } from "@mui/material";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { login } from "../../reducers/user.reducer";
import ConnectModule from "../../services/itsse.axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //
  const navigate = useNavigate();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();

  const signin = useCallback(() => {
    //
    const loginData = {
      id,
      password,
    };
    ConnectModule.sendPost("/sign-api/sign-in", loginData, setToken);
  }, [id, password]);

  const setToken = (response) => {
    console.log("[ Login.js ] 로그인 함수 호출 : ", response);
    const responseData = response.data;
    const token = responseData.token;
    window.localStorage.setItem("token", token);
    dispatch(login(responseData.user));
    navigate("/article/mylist");
  };

  const goToUserRegister = () => {
    window.location.href = "/user/register";
  };
  //
  return (
    <div style={{ marginTop: "30px" }}>
      <Box
        component="form"
        style={{
          background: "#efefef",
          padding: "1.5rem",
          paddingBottom: "4rem",
        }}
      >
        <h2 style={{ marginBottom: "1.5rem" }}>로그인하기</h2>
        <div>
          <TextField
            required
            id="outlined-required"
            label="e-메일 주소(ID)"
            value={id}
            onChange={onChangeId}
            style={{ width: "500px" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="비밀번호"
            type="password"
            value={password}
            onChange={onChangePassword}
            autoComplete="current-password"
            style={{ width: "500px", marginTop: "1.5rem" }}
          />
        </div>
        <div style={{ width: "500px", marginTop: "1.5rem" }}>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" onClick={signin}>
              로그인
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={goToUserRegister}
            >
              회원가입
            </Button>
            <Button variant="contained" color="error">
              비밀번호 분실
            </Button>
          </Stack>
        </div>
      </Box>
    </div>
  );
};

export default Login;
