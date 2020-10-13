import React from 'react'

// just add export
export const Book = ({title="No Title Provided", author="No Author", pages="0", freeBookmark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages} pages</p>
        <p>Free Bookmark today: {freeBookmark ? 'yes!' : 'no!'}</p>
      </section>
    )
  }