import './App.css';
import {Route, Routes, Router} from 'react-router-dom';
import Home from './Pages/Home';
import MyLibrary from './Pages/MyLibrary';
import Search from './Pages/Search';
import ErrorPage from './Pages/ErrorPage';
import DisplayTest from './Pages/DisplayTest'
import Nav from './Components/Nav';
import { useState } from 'react';
import Read from './Pages/Read';
import CurrentlyReading from './Pages/CurrentlyReading';
import WantToRead from './Pages/WantToRead';

function App() {

  const [bookCollection, setBookCollection] = useState([]);

  function addBookFunction(newBook)
  {
    //console.log(newBook);
      let oldBookCollection = bookCollection;

      oldBookCollection = [...bookCollection, newBook];

      setBookCollection(oldBookCollection);
  }


  return (
    <div className="App">

      <Nav />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mylibrary' element={<MyLibrary bookCollection={bookCollection}/>}></Route>
        <Route path='/read' element={<Read />}></Route>
        <Route path="/currentlyreading" element={<CurrentlyReading />}></Route>
        <Route path="/wanttoread" element={<WantToRead />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path="/displayTest/:symbol" element={<DisplayTest addBookFunction = {addBookFunction}/>}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
