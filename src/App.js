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

  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([])
  const [bookCollection, setBookCollection] = useState([]);

  function addBookFunction(newBook)
  {

      let oldBookCollection = bookCollection;

      // console.log(newBook);
      oldBookCollection = [...bookCollection, newBook[0]];

      setBookCollection(oldBookCollection);
  }


  return (
    <div className="App">

      <Nav />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mylibrary' element={<MyLibrary />}></Route>
        <Route path='/read' element={<Read bookCollection={bookCollection}/>}></Route>
        <Route path="/currentlyreading" element={<CurrentlyReading currentlyReading={currentlyReading}/>}></Route>
        <Route path="/wanttoread" element={<WantToRead wantToRead={wantToRead}/>}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path="/displayTest/:symbol" element={<DisplayTest currentlyReading={currentlyReading} setCurrentlyReading={setCurrentlyReading} wantToRead={wantToRead}
        setWantToRead={setWantToRead} addBookFunction = {addBookFunction}/>}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
