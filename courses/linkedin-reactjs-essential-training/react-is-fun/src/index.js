import { render } from '@testing-library/react'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Library from './Library'

let bookList = [
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "Another Book", "author": "Not Hemingway", "pages": 290},
  {"title": "Good Book", "author": "Person"}
]

render(
  <div>
    {/* Following uses default props: */}
    <Library/>,
    <Library books={bookList}/>
  </div>,
  document.getElementById('root')// where we want to render it to
)