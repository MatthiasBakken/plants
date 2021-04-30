import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
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
    pageTitle(`${params.get("nickname").toUpperCase()}`)
    setPlant( {
      image: params.get( "image" ),
      nickname: params.get( "nickname" ),
      species: params.get( "species" ),
      h2o_frequency: params.get( "h2o_frequency" ),
      id: params.get( "id" )
    })
    console.log(  )
    console.log(params.get("species"))
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
      <div className="plant_box" >
        <div className="myplant">
          <div className="plant_img">
            <img src={`${plant.image ? `${plant.image}` : 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}`} alt="plant" />
          </div>
          <div className="plant_data">
            <div>
              <span className="name">
                <label>Nickname: </label>
                <p>{`${plant.nickname}`}</p>
              </span>
              <span className="spec">
                <label>Species: </label>
                <p>{`${plant.species}`}</p>
              </span>
              <span className="h2o">
                <label>H2o Frequency: </label>
                <p>{`${plant.h2o_frequency}`}</p>
              </span>
            </div>
          </div>
          <div className="edit_delete_buttons">
            <Link to={`/edit-plant/${plant.id}`} >
              <button >Edit</button>
            </Link>
            <button onClick={() => onClickDeleteHandler()} >Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantPage;