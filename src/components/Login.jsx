import React from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const MyPage = () => {
        navigate('/Mypage');
    }

    const signup = () => {
        navigate('/Signup');
      }

    return(
        <div className='Login'>
            <div className='Login-body'>
                <nav className='login-nav'>
                    <h1>Typeing Express</h1>
                    <button onClick={signup}>Signup</button>
                </nav>
                <div className='login-form'>
                    <h1>Login</h1>
                    <div className='YouserName'>
                        <div>ユーザー名</div>
                        <input 
                            type='text'
                            placeholder='HogePage'
                        />
                    </div>
                    <div className='Password'>
                        <div>パスワード</div>
                        <input
                            type='text'
                            placeholder='・・・・・・・'
                        />
                    </div>
                    <button onClick={MyPage}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;