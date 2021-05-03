import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory as history } from 'react-router';

import axios from 'axios';
import './plant-page.scss'


const initialPlant = {
  image: "",
  nickname: "",
  species: "",
  h2o_frequency: 0,
  id: 999999
}

const PlantPage = (props) => {

  const jwtToken = localStorage.getItem("jwtToken");
  const userId = localStorage.getItem("userId");
  const [ plant, setPlant ] = useState( initialPlant );
  const { pageTitle } = props;

  const params = new URLSearchParams( window.location.search );
  useEffect( () => {
    pageTitle( `${params.get( "nickname" ).toUpperCase()}` );
    setPlant( {
      image: params.get( "image" ),
      nickname: params.get( "nickname" ),
      species: params.get( "species" ),
      h2o_frequency: params.get( "h2o_frequency" ),
      id: params.get( "id" )
    } );
    console.log();
    console.log( params.get( "species" ) );
  }, [] );

  const onClickDeleteHandler = () => {

    axios.delete(`https://tt157-backend.herokuapp.com/api/users/${userId}/plant`,
      { data: { plant_id: plant.id } }, {
      headers: { authorization: `bearer ${jwtToken}` }
    }
    ).then(res => {
      return res.data;
    }).catch(err => {
      return err;
    });
  };

  return (
    <div className="plant-page-container" >
      {
        jwtToken ?
        <div className="plant_box" >
          <div className="myplant">
            <div className="plant_img" testid="plant-img-container">
              <img testid="plant-image" src={`${plant.image ? `${plant.image}` : 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}`} alt="plant" />
            </div>
            <div className="plant_data">
              <div testid="plant-data">
                <span className="name" testid="plant-nickname-span">
                  <label testid="plant-nickname-label">Nickname: </label>
                  <p testid="plant-nickname-par">{`${plant.nickname}`}</p>
                </span>
                <span testid="plant-species-span" className="spec">
                  <label testid="plant-species-label">Species: </label>
                  <p testid="plant-species-par">{`${plant.species}`}</p>
                </span>
                <span testid="plant-h2o-span" className="h2o">
                  <label testid="plant-h2o-label">H2o Frequency: </label>
                  <p testid="plant-h2o-par">{`${plant.h2o_frequency}`}</p>
                </span>
              </div>
            </div>
            <div testid="plant-btns-container" className="edit_delete_buttons">
              <Link testid="plant-edit-btn-link" to={`/edit-plant/${plant.id}`} >
                <button testid="plant-edit-btn">Edit</button>
              </Link>
              <button testid="plant-delete-btn" onClick={() => onClickDeleteHandler()} >Delete</button>
            </div>
          </div>
        </div>
          :
        <div>
          ...
        </div>
      }
    </div>
  )
}

export default PlantPage;