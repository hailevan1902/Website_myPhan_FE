import React from 'react';

import './styles.scss'
import { Button, Container, TextField } from '@mui/material';

LoginAdmin.propTypes = {

};

function LoginAdmin(props) {
    return (

        <div className="login-admin">
            <Container>
                <form action="">
                    <h1>ADMIN</h1>
                    <TextField label='Tài khoản' fullWidth className='input1'></TextField>
                    <TextField label='Mật khẩu' type='password' fullWidth className='input2'></TextField>
                    <a href="/manager">Đăng nhập</a>
                </form>
            </Container>

        </div>
    );
}

export default LoginAdmin;