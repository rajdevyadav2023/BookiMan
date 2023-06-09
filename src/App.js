
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Favorites from './components/Favorites';
import BookDetails from './components/BookDetails';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<BookList/>} />
        <Route path='/books/:id' element={<BookDetails/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='*' element={<BookList/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
