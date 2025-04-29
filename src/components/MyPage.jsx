import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
    return(
        <div>
            <div className='MyPage'>
                <h1>My Page</h1>
            </div>
            <div className='user-info'>
                <h3>ユーザー情報</h3>
                <p className='user-name'>ユーザー名</p>
                <p className='user-mail'>メールアドレス</p>
            </div>
            <div className='score'>
                <h3>最高スコア</h3>
                <Link to='/Scorelist'>スコア一覧へ</Link>
            </div>
            <div className='roulette'>
                <div className='roulette-list'>
                    <p>ルーレットタイトル</p>
                    <p>作成日</p>
                    <ul>
                        <li>
                            <p></p>
                            <p></p>
                        </li>
                        <li>
                            <p></p>
                            <p></p>
                        </li>
                        <li>
                            <p></p>
                            <p></p>
                        </li>
                    </ul>
                </div>
                <Link to='/Roulettelist'>ルーレット一覧へ</Link>
            </div>
            <button>TRY</button>
        </div>
    )
}

export default MyPage;