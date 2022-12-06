/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import useInput from "../../hooks/useInput";
import { useCallback, useState } from "react";
import ConnectModule from "../../services/itsse.axios";

const Register = () => {
  //
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [name, onChangeUsername] = useInput("");
  const [birthday, onChangeBirthday] = useInput("");
  const [phoneNo, onChangePhoneno] = useInput("");
  const [role, onChangeRole] = useInput("user");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      //
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  //
  const clickRegister = useCallback(() => {
    //
    const registerTargetData = {
      id,
      password,
      name,
      role,
    };
    console.log(registerTargetData);
    ConnectModule.sendPost("/sign-api/sign-up", registerTargetData);
  }, [id, nickname, password, name, role]);
  //
  return (
    <div>
      <h2>
        <HowToRegIcon fontSize="large" color="action" />
        회원등록
      </h2>
      <Box component="form">
        <div>
          <TextField
            required
            id="outlined-required"
            label="e-메일 주소(ID)"
            value={id}
            onChange={onChangeId}
            type="email"
            style={{ width: "500px" }}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="이름"
            value={name}
            onChange={onChangeUsername}
            style={{ width: "500px", marginTop: "1.5rem" }}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="생년월일"
            value={birthday}
            onChange={onChangeBirthday}
            style={{ width: "500px", marginTop: "1.5rem" }}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="전화번호"
            value={phoneNo}
            onChange={onChangePhoneno}
            style={{ width: "500px", marginTop: "1.5rem" }}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="닉네임"
            value={nickname}
            onChange={onChangeNickname}
            style={{ width: "500px", marginTop: "1.5rem" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="비밀번호"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={onChangePassword}
            style={{ width: "500px", marginTop: "1.5rem" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="비밀번호 확인"
            type="password"
            autoComplete="current-password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            style={{ width: "500px", marginTop: "1.5rem" }}
          />
          {passwordError && (
            <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
        <div style={{ width: "500px", marginTop: "1.5rem" }}>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" onClick={clickRegister}>
              등록하기
            </Button>
            <Button variant="contained" color="error">
              뒤로가기
            </Button>
          </Stack>
        </div>
      </Box>
    </div>
  );
};

export default Register;
