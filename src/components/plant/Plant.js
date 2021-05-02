import React from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import './plant.scss'


const Plant = (props) => {

  const jwtToken = localStorage.getItem("jwtToken");
  const userId = localStorage.getItem("userId");


  const onClickDeleteHandler = () => {

    axios.delete(`https://tt157-backend.herokuapp.com/api/users/${userId}/plant`,
      { data: { plant_id: props.plantData.id } }, {
      headers: { authorization: `bearer ${jwtToken}` }
    }
    ).then(res => {
      return res.data;
    }).catch(err => {
      return err;
    });
  };

  return (
    <div className="plant_box"> 

      <div className="myplant">

        <Link testid="plant-img-link" to={`/plant-page/${props.plantData.id}?nickname=${props.plantData.nickname}&species=${props.plantData.species}&h2o_frequency=${props.plantData.h2o_frequency}&image=${props.plantData.image}&id=${props.plantData.id}`} className="plant_img ">
          <img testid="plant-img" src={`${props.plantData.image ? `${props.plantData.image}` : 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}`} alt="plant" />
        </Link>

        <div className="plant_data">
          <div testid="plant-data-container">
            <span className="nickname">
              <label testid="plant-nickname-label">Nickname: </label><br/>
              <p testid="plant-nickname-par">{`${props.plantData.nickname}`}</p>
            </span>
            <span className="species">
              <label testid="plant-species-label">Species: </label><br/>
              <p testid="plant-species-par">{`${props.plantData.species}`}</p>
            </span>
            <span className="h2o-frequency">
              <label testid="plant-h2o-label">H2o Frequency: </label><br/>
              <p testid="plant-h2o-par">{`${props.plantData.h2o_frequency}`}</p>
            </span>
          </div>
        </div>

        <div className="edit_delete_buttons">
          <Link testid="plant-edit-link" to={`/edit-plant/${props.plantData.id}`} >
            <button testid="plant-edit-button">Edit</button>
          </Link>
          <button testid="plant-delete-button" onClick={() => onClickDeleteHandler()} >Delete</button>
        </div>

      </div>

    </div>
  )
}

export default Plant;