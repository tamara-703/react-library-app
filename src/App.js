import './App.css';
import {Route, Routes, Router} from 'react-router-dom';
import Home from './Pages/Home';
import MyLibrary from './Pages/MyLibrary';
import Search from './Pages/Search';
import ErrorPage from './Pages/ErrorPage';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">

      <Nav />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mylibrary' element={<MyLibrary />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
