import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import './App.css';
import MyPage from './components/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/Signup'element={<Signup/>}></Route>
        <Route path='/Mypage'element={<MyPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
