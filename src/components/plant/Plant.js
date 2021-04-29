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

        <Link to={`/plant-page/${props.plantData.id}?nickname=${props.plantData.nickname}&species=${props.plantData.species}&h2o_frequency=${props.plantData.h2o_frequency}&image=${props.plantData.image}&id=${props.plantData.id}`} className="plant_img">
          <img src={`${props.plantData.image ? `${props.plantData.image}` : 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}`} alt="plant" />
        </Link>

        <div className="plant_data">
          <div>
            <span className="nickname">
              <label>Nickname: </label>
              <p>{`${props.plantData.nickname}`}</p>
            </span>
            <span className="species">
              <label>Species: </label>
              <p>{`${props.plantData.species}`}</p>
            </span>
            <span className="h2o-frequency">
              <label>H2o Frequency: </label>
              <p>{`${props.plantData.h2o_frequency}`}</p>
            </span>
          </div>
        </div>

        <div className="edit_delete_buttons">
          <Link to={`/edit-plant:${props.plantData.id}`} >
            <button >Edit</button>
          </Link>
          <button onClick={() => onClickDeleteHandler()} >Delete</button>
        </div>

      </div>

    </div>
  )
}

export default Plant;