import React from 'react';
import './animation.css';

const Animation = () => {
  const charactersPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';

  // ランダムな文字を生成
  const generateRandomCharacters = () => {
    return Array.from({ length: 20 }, () =>
      charactersPool.charAt(Math.floor(Math.random() * charactersPool.length))
    );
  };

  const randomCharacters = generateRandomCharacters();

  return (
    <div className="container">
      {randomCharacters.map((char, index) => (
        <div
          key={index}
          className="text-animation"
          style={{
            animationDelay: `${index * 0.5}s`, // アニメーション開始時間の遅延
            left: `${Math.random() * 90}vw`,  // 横方向のランダム位置
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default Animation;