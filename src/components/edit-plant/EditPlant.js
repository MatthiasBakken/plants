import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { browserHistory as history } from 'react-router';

import axios from 'axios';

import './edit-plant.scss';


const EditPlant = ( props ) => {

  const initialPlant = {
    nickname: '',
    species: '',
    h2o_frequency: '',
    image: ''
  };

  const jwtToken = localStorage.getItem( "jwtToken" );

  const [ plant, setPlant ] = useState( initialPlant );
  const { pageTitle } = props;

  let queryStr = `${useLocation().pathname}`;
  let plantId = queryStr.split( "/" );
  plantId = plantId[ plantId.length - 1 ];
  
  useEffect( () => {
    if ( !jwtToken ) {
      history.push( "/" );
      window.location.reload();
    };
    pageTitle( "EDIT YOUR PLANT" );
    axios.get( `https://tt157-backend.herokuapp.com/api/plants/${plantId}` )
      .then( res => {
        setPlant( res.data );
        return res.data;
      } );
  }, [] );

  const changeHandler = e => {
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
        console.log( plantRes );
        history.push( '/plants' );
        window.location.reload();
      } )
      .catch( err => console.log( "cannot post plant", { err } ) );
  };
  
  return (
    <div className="edit-plant-container">
      {
        jwtToken ?
          <form onSubmit={handleSubmit} testid="edit-plant-form">
            <h2 testid="edit-plant-title">Edit Your Plant</h2>
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
            <button testid="edit-plant-submit">Update Plant</button>
          </form>
          :
          <div>
            ...
          </div>
      }
    </div>
  );
};

export default EditPlant;