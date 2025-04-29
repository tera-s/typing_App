import React from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const MyPage = () => {
      navigate('/Mypage');
    }
    return(
        <div className='Login-Page'>
            <div className='Login'>
                <h1>Signup</h1>
                <div className='YouserName'>
                    <div>ユーザー名</div>
                    <input 
                        type='text'
                        placeholder='HogePage'
                    />
                </div>
                <div className='mail'>
                    <div>メールアドレス</div>
                    <input
                        type='text'
                        placeholder='example@fam.com'
                    />
                </div>
                <div className='Password'>
                    <div>パスワード</div>
                    <input
                        type='text'
                        placeholder='・・・・・・・'
                    />
                </div>
                <button onClick={MyPage}>Signup</button>
            </div>
        </div>
    )
}

export default Signup;