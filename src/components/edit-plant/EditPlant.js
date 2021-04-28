import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useLocation } from 'react-router-dom';


const EditPlant = () => {

  const initialPlant = {
    nickname: '',
    species: '',
    h2o_frequency: '',
    image: ''
  }

  const jwtToken = localStorage.getItem( "jwtToken" );
  const userId = localStorage.getItem( "userId" );

  const [ plant, setPlant ] = useState(initialPlant);

  let queryStr = `${useLocation().pathname}`;
  console.log( queryStr );
  let plantId = queryStr.split( ":" )[ 1 ];
  console.log( "plantId", plantId );
  
  useEffect( () => {
    axios.get( `https://tt157-backend.herokuapp.com/api/plants/${plantId}` )
      .then( res => {
        console.log( res );
        setPlant( res.data );
      })
  }, [])

  const changeHandler = e => {
    console.log( e.target.value );
    setPlant( {
      ...plant,
      [ e.target.name ]: e.target.value
    } );
  };
    
  const handleSubmit = e => {
    e.preventDefault();
    axios.put( `https://tt157-backend.herokuapp.com/api/plants/${plantId}`, {
      id: plantId,
      nickname: plant.nickname,
      species: plant.species,
      h2o_frequency: plant.h2o_frequency,
      image: plant.image
    }, {
      headers: {
        authorization: `bearer ${jwtToken}`
      }
    } )
      .then( plantRes => {
        console.log( "update res", plantRes );
        window.location.replace( '/plants' );
      } )
      .catch( err => console.log( "cannot post plant", { err } ) );
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a New Plant</h2>
        <input
            type="text"
            name="nickname"
            placeholder="Nick Name"
            onChange={changeHandler}
            value={plant.nickname}
        />
        <input
            type="text"
            name="species"
            placeholder="Species"
            onChange={changeHandler}
            value={plant.species}
        />
        <input
            type="number"
            name="h2o_frequency"
            placeholder="H2oFrecuency"
            onChange={changeHandler}
            value={plant.h2o_frequency}
        />
    
        <input
            type="string"
            name="image"
            placeholder="Image URL"
            onChange={changeHandler}
            value={plant.image}
        />
        <button>Update Plant</button>
      </form>
    </div>
  )
}

export default EditPlant;