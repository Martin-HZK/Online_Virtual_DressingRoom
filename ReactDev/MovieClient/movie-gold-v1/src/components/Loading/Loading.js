import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <footer className="footer-loader">
      {true ? <p>Loading...</p> : null}
    </footer>
  )
}

export default Loading