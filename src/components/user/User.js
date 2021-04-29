import React, { useEffect } from 'react'

import { Link } from 'react-router-dom';

import './user.scss'

const jwtToken = localStorage.getItem( "jwtToken" );
const loginMsg = localStorage.getItem( "loginMsg" );

const User = (props) => {
  const { pageTitle } = props;

  useEffect( () => {
    pageTitle( "HOME" );
  }, [])

  if ( jwtToken ) {
    return (
      <div className='container'>
        <h1>Water My Plants</h1>
        <div>
          {
            loginMsg ?
              <div>
                <p>{`${loginMsg}`}</p>
                <div className="plant-img-container">
                  <img src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="plant picture" />
                </div>
              </div>
              :
              <p>Get started by <Link to="/create-plant">creating a plant</Link></p>
          }
        </div>
      </div>
    );
  } else {
    window.location.replace( '/login' );
  }
}

export default User;