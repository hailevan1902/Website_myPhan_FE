import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, FormControl, IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './register.scss'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

Register.propTypes = {

};

function Register(props) {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [pass2, setPass2] = React.useState("");
    const [wrong, setWrong] = React.useState(false)
    const [isShowPass, setIsShowPass] = React.useState(true);
    const [isShowPass2, setIsShowPass2] = React.useState(false);

    const handle = () => {
        if (email.length === 0 && pass.length === 0 && pass2.length === 0) {
            alert('Không được bỏ trống');
            setWrong(!wrong);
        } else {
            alert('Đăng ký thành công');
        }



    };

    const showPass = () => {
        setIsShowPass(!isShowPass);
    }

    const showPass2 = () => {
        setIsShowPass2(!isShowPass2);
    }

    return (
        <React.Fragment>
            <Header></Header>
            <div className='login2'>
                <Container>
                    <div className='login__form'>
                        <div className="form__center">
                            <div className="login__title">
                                <p>Đăng ký tài khoản</p>
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

                                    <TextField className='pass2' label="Nhắc lại mật khẩu" margin="normal"
                                        type={isShowPass2 ? 'text' : 'password'}
                                        value={pass2}

                                        onChange={(p) => {
                                            setPass2(p.target.value);
                                        }}
                                    >
                                    </TextField>


                                    <div className="showPass" onClick={showPass}>
                                        {isShowPass ? <VisibilityOff /> : <Visibility />}
                                    </div>

                                    <div className="showPass2" onClick={showPass2}>
                                        {isShowPass2 ? <VisibilityOff /> : <Visibility />}
                                    </div>

                                </FormControl>
                            </div>

                            <div className="login__button">
                                <Button variant="contained" href={wrong ? '/register' : '/login'} className='button__login' onClick={handle}>Đăng ký</Button>
                            </div>

                            <div className="register">
                                <p>Bạn đã có tài khoản ? <Button href='/login'>Đăng nhập</Button> ngay </p>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Register;