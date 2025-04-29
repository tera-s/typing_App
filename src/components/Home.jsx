import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import Animation from './animation/animation'; // アニメーションコンポーネントのインポート

const Home = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('/Login');
  };

  const signup = () => {
    navigate('/Signup');
  };

  return (
    <div className="home">
      <Animation /> {/* 背景アニメーション */}
      <div className="home-body">
        <div className="main">
          <h1 className="title">Typing Express</h1>
          <div className="btn">
            <button id="btn" className="login-btn" onClick={login}>Login</button>
            <button id="btn" className="signup-btn" onClick={signup}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;