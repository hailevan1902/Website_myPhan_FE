import { Button, Container, FormControl, IconButton, TextField } from '@mui/material';
import * as React from 'react';
import './login.scss';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


Login.propTypes = {

};

function Login(props) {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [isShowPass, setIsShowPass] = React.useState(false);

    const handle = () => {
        alert("Đăng nhập thành công");
    };

    const showPass = () => {
        setIsShowPass(!isShowPass);
    }
    return (
        <React.Fragment>
            <Header></Header>
            <div className='login'>
                <Container>
                    <div className='login__form'>
                        <div className="form__center">
                            <div className="login__title">
                                <p>Đăng nhập</p>
                            </div>

                            <div className="login__input">
                                <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">

                                    <TextField className='email' label="Email" margin="normal"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />

                                    <TextField className='pass' label="Mật khẩu" margin="normal"
                                        type={isShowPass ? 'text' : 'password'}
                                        value={pass}
                                        onChange={(p) => {
                                            setPass(p.target.value);
                                        }}
                                    >
                                    </TextField>

                                    <div className="showPass" onClick={showPass}>
                                        {isShowPass ? <VisibilityOff /> : <Visibility />}
                                    </div>

                                </FormControl>
                            </div>

                            <div className="login__button">
                                <Button href='/' variant="contained" className='button__login' onClick={handle}>Đăng nhập</Button>
                            </div>

                            <div className="register">
                                <p>Chưa có tài khoản ? <Button href='/register' >Đăng ký</Button> ngay </p>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Login;