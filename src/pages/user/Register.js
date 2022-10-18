import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Register = () => {
    //
    const clickRegister = () => {
        //
        alert("등록이 완료되었습니다.");
    }
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
                        style={{width:'500px'}}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="이름"
                        style={{width:'500px', marginTop:'1.5rem'}}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="닉네임"
                        style={{width:'500px', marginTop:'1.5rem'}}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="비밀번호"
                        type="password"
                        autoComplete="current-password"
                        style={{width:'500px', marginTop:'1.5rem'}}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="비밀번호 확인"
                        type="password"
                        autoComplete="current-password"
                        style={{width:'500px', marginTop:'1.5rem'}}
                    />
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