import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Plant from '../plant/Plant';
import './Plants.css'


const jwtToken = localStorage.getItem( "jwtToken" );
const userId = localStorage.getItem( "userId" );

const Plants = ( props ) => {

  const [ plants, setPlants ] = useState( [] );
  const { pageTitle } = props;

  useEffect( () => {
    if ( !jwtToken ) {
      window.location.replace( '/' );
    };
    axios.get( `https://tt157-backend.herokuapp.com/api/users/${userId}`, {
      headers: { authorization: `bearer ${jwtToken}` }
    } )
      .then( res => {
        pageTitle( "PLANTS" );
        setPlants( res.data.plants );
      } );
    
  }, [] );


  return (
    <div className="plants-container">
      {
        jwtToken ?
          <div className="plants">
            <div className="plants-wrapper">
              {
                plants.map( plant => {
                  return (
                    <Plant plantData={plant} key={plant.id} />
                  );
                } )
              }
            </div>
          </div>
          :
          <div>
            ...
          </div>
      }
    </div>
  );
};


export default Plants;