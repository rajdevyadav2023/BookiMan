import React from 'react'
import { useAppContext } from '../context/appContext'

const Favorites = () => {
  const { favorites, removeFromFavorites } = useAppContext();
  return (
    <div className='favorites'>

      {
        favorites.length > 0 ? favorites.map((book) =>
        (
          <div className="book">
            <div className="book-img">
              <img src={book.image_url} alt={book.title} />
            </div>
            <div className="book-title">
              <p>{book.title}</p>
            </div>
            <div className='btn-group'>
              <button className='btn' onClick={() => removeFromFavorites(book.id)}>Remove</button>
              <button className='btn'>Buy</button>
            </div>
          </div>
        )
        ) : <p>Your favorite list is empty .</p>
      }
    </div>
  )
}

export default Favorites
