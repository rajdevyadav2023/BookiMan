import React, { useEffect, useState } from 'react'
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
const BookList = () => {
  const [books, setBooks] = useState([]);
const navigate = useNavigate();
const {favorites, addToFavorites, removeFromFavorites} = useAppContext();


// console.log("favorites are ", favorites);
const favoritesChecker = (id)=>{
const boolean = favorites.some((book)=> book.id === id);
return boolean;
}
  useEffect((()=>{
    axios.get(API_URL).then((res)=>{
      setBooks(res.data);
    }).catch((err)=>{console.log(err)});
  }), [])



  return (
    <div className='book-list' >
      {
        books.map((book)=>{
          return <div key={book.id} className='book'>
            
            <div>
              <img src={book.image_url} alt="#" onClick={()=>{navigate(`/books/${book.id}`)}} />
            </div>
            <div>
              <p>{book.title}</p>
            </div>
            {
              favoritesChecker(book.id) ? (
                <div className='btn-box'>
                   <button>Read</button>
                <button onClick={()=>{removeFromFavorites(book.id)}}><i className="fa-solid fa-heart"></i></button>
              </div>
              ) : 
              (
                <div className='btn-box'>
                  <button>Read</button>
                <button onClick={()=>{addToFavorites(book)}}><i className="fa-regular fa-heart"></i></button>
              </div>
              )
            }
            
          </div>;
        })
      }
    </div>
  )
}

export default BookList
