import React from 'react'
import './user.scss'

const jwtToken = localStorage.getItem( "jwtToken" );

const User = () => {

  if ( jwtToken ) {
    return (
      <div className='container'>
        <h1>Water My Plants</h1>
        <div>Stuff goes here</div>
      </div>
    );
  } else {
    window.location.replace( '/login' );
  }
}