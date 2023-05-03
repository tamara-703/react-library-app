import './App.css';
import {Route, Routes, Router} from 'react-router-dom';
import Home from './Pages/Home';
import MyLibrary from './Pages/MyLibrary';
import Search from './Pages/Search';
import SearchByCategory from './Pages/SearchByCategory'
import ErrorPage from './Pages/ErrorPage';
import DisplayTest from './Pages/DisplayTest'
import Nav from './Components/Nav';
import { useState } from 'react';
import Read from './Pages/Read';
import CurrentlyReading from './Pages/CurrentlyReading';
import WantToRead from './Pages/WantToRead';
import DisplayHomeBook from './Pages/DisplayHomeBook';

function App() {

  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [bookCollection, setBookCollection] = useState([]);
  const [homeBook, setHomeBook] = useState(null);

  function addBookFunction(newBook)
  {

      let oldBookCollection = bookCollection;

      oldBookCollection = [...bookCollection, newBook[0]];

      setBookCollection(oldBookCollection);
  }


  return (
    <div className="App">

      <Nav />

      <Routes>

        <Route path='/' element={<Home setHomeBook={setHomeBook}/>}></Route>
        <Route path='/mylibrary' element={<MyLibrary bookCollection={bookCollection}/>}></Route>
        <Route path='/read' element={<Read bookCollection={bookCollection}/>}></Route>
        <Route path="/currentlyreading" element={<CurrentlyReading currentlyReading={currentlyReading}/>}></Route>
        <Route path="/wanttoread" element={<WantToRead wantToRead={wantToRead}/>}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path="/searchbycategory" element={<SearchByCategory />}></Route>
        <Route path="/displayTest/:symbol" element={<DisplayTest currentlyReading={currentlyReading} setCurrentlyReading={setCurrentlyReading} wantToRead={wantToRead}
        setWantToRead={setWantToRead} addBookFunction = {addBookFunction} homeBook={homeBook}/> }></Route>
        <Route path="/displayhomebook/:symbol" element={<DisplayHomeBook homeBook={homeBook}/>}></Route>
        <Route path='*' element={<ErrorPage />}></Route>

      </Routes>

    </div>
  );
}

export default App;
