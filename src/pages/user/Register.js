import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import useInput from '../../hooks/useInput';
import { useCallback, useState } from 'react';
import AxiosModule from '../../services/itsse.axios';

const Register = () => {
    //
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [username, onChangeUsername] = useInput('');
    const [birthday, onChangeBirthday] = useInput('');
    const [phoneNo, onChangePhoneno] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const am = AxiosModule();

    const onChangePasswordCheck = useCallback((e) => {
        //
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password])

    //
    const clickRegister = useCallback(()=>{
        //
        const registerTargetData = {
            email,
            nickname,
            password,
            phoneNo,
            username,
            birthday,
        }
        console.log(registerTargetData);
        am.sendPost('http://localhost:8080/api/user/register', registerTargetData);
    }, [email, username, birthday, nickname, password, passwordCheck, phoneNo]);
    //
    return (
        <div>
            <h2><HowToRegIcon fontSize='large' color='action'/>회원등록</h2>
            <Box component="form">
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="e-메일 주소(ID)"
                        value={email}
                        onChange={onChangeEmail}
                        type="email"
                        style={{width:'500px'}}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="이름"
                        value={username}
                        onChange={onChangeUsername}
                        style={{width:'500px', marginTop:'1.5rem'}}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="생년월일"
                        value={birthday}
                        onChange={onChangeBirthday}
                        style={{width:'500px', marginTop:'1.5rem'}}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="전화번호"
                        value={phoneNo}
                        onChange={onChangePhoneno}
                        style={{width:'500px', marginTop:'1.5rem'}}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="닉네임"
                        value={nickname}
                        onChange={onChangeNickname}
                        style={{width:'500px', marginTop:'1.5rem'}}
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
                        style={{width:'500px', marginTop:'1.5rem'}}
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
                        style={{width:'500px', marginTop:'1.5rem'}}
                    />
                    {passwordError && <p style={{color:'red'}}>비밀번호가 일치하지 않습니다.</p>}
                </div>
                <div style={{width:'500px', marginTop:'1.5rem'}}>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" onClick={clickRegister}>등록하기</Button>
                        <Button variant="contained" color="error">뒤로가기</Button>
                    </Stack>
                </div>
            </Box>
        </div>
    )
};

export default Register;