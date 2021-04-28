import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Plant from '../plant/Plant';


const jwtToken = localStorage.getItem( "jwtToken" );
const userId = localStorage.getItem( "userId" );

const Plants = () => {

  const [ plants, setPlants ] = useState( [] );

  useEffect( () => {
    axios.get( `https://tt157-backend.herokuapp.com/api/users/${userId}`, {
      headers: { authorization: `bearer ${jwtToken}` }
    } )
      .then( res => {
        console.log( res.data.plants );
        setPlants( res.data.plants );
      } );
    
  }, [] );

  if ( jwtToken ) {
    return (
      <div className="plants-container">
        <div className="plants">
          {
            plants.map( plant => {
              return (
                <Plant plantData={plant} key={plant.id} />
              );
            } )
          }
        </div>
      </div>
    );
  } else {
    window.location.replace( '/login' );
  }
};


export default Plants;