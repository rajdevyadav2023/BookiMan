import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../API';
const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${+id}`).then((res) => {
      setBook(res.data);
      console.log(res.data);
    }).catch((err) => { console.log(err) });
  }, [id])
  return (
    <div className='book-details'>
    <div className="detail-img-box">
      <img src={book?.image_url} alt="#" />
      <div className="btn-box">
        <button>Read</button>
        <button><i className="fa-regular fa-heart"></i></button>
        
      </div>
    </div>

    <div className="detail-text-box">
      <h3> Name : {book?.title}</h3>
      <h3>Authors : {book?.authors}</h3>
      <p>Description: {book?.description}</p>
      <p>Quote 1 : {book?.Quote1}</p>
      <p>Quote 2 : {book?.Quote2}</p>
      <p>Quote 3 : {book?.Quote3}</p>
      <p>Genres : {book?.genres}</p>
      <p>Pages : {book?.num_pages}</p>
      <p>Rating : {book?.rating}</p>
      <p>Ratings : {book?.rating_count}</p>
      <p>Reviews : {book?.review_count}</p>
    </div>
    </div>
  )
}

export default BookDetails;
