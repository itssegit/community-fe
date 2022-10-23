import { Box, Stack, Button, TextField } from "@mui/material";
import { useCallback } from "react";
import useInput from "../../hooks/useInput";
import AxiosModule from "../../services/itsse.axios";

const Login = () => {
    //
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const axiosModule = AxiosModule();

    const login = useCallback(() => {
        //
        const loginData = {
            email,
            password
        }
        axiosModule.sendPost('http://localhost:8080/api/user/signin', loginData);
    }, [email, password]);
    //
    return (
        <div style={{marginTop:'4rem'}}>
            <Box component='form' style={{background:'#efefef', padding:'1.5rem', paddingBottom: '4rem'}}>
                <h2 style={{marginBottom:'1.5rem'}}>
                    로그인하기
                </h2>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="e-메일 주소(ID)"
                        value={email}
                        onChange={onChangeEmail}
                        style={{width:'500px'}}
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
                        style={{width:'500px', marginTop:'1.5rem'}}
                    />
                </div>
                <div style={{width:'500px', marginTop:'1.5rem'}}>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" onClick={login}>로그인</Button>
                        <Button variant="contained" color="success">회원가입</Button>
                        <Button variant="contained" color="error">비밀번호 분실</Button>
                    </Stack>
                </div>
            </Box>
        </div>
    )
};

export default Login;