import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  // let [a, b] = useState('남자 코드 추천');
  // a state에 보관했던 자료가 나옴
  // b 는 states 변경을 도와주는 함수

  let [글제목, b] = useState('남자 코드 추천');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color: "red", fontSize: "16px"} }>블로그임</h4>
      </div>
      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발핼</p>
      </div>
      <h4 id={post}>{ post }</h4>
    </div>
  );
}

export default App;
