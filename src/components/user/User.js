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
        <h1 testid="home-title">Water My Plants</h1>
        <div testid="home-container">
          {
            loginMsg ?
              <div testid="login-with-message">
                <p testid="login-message">{`${loginMsg}`}</p>
                <div className="plant-img-container">
                  <img src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="plant_picture" />
                </div>
              </div>
              :
              <div testid="login-without-message">
                <p testid="get-started-message">Get started by <Link to="/create-plant" testid="create-plant-link">creating a plant</Link></p>
                <div className="plant-img-container">
                  <img src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="plant_picture" />
                </div>
              </div>
          }
        </div>
      </div>
    );
  } else {
    window.location.replace( '/login' );
  }
}

export default User;