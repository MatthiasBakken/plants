import React from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import './plant.scss'


const Plant = (props) => {

  const jwtToken = localStorage.getItem("jwtToken");
  const userId = localStorage.getItem("userId");


  const onClickDeleteHandler = () => {

    console.log("plant id", props.plantData.id);

    axios.delete(`https://tt157-backend.herokuapp.com/api/users/${userId}/plant`,
      { data: { plant_id: props.plantData.id } }, {
      headers: { authorization: `bearer ${jwtToken}` }
    }
    ).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <div className="plant_box"> 

      <div className="myplant">

        <div className="plant_img">
          <img src={`${props.plantData.image ? `${props.plantData.image}` : 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}`} alt="plant" />
        </div>

        <div className="plant_data">
          <div>
          <p>{`NickName: ${props.plantData.nickname}`}</p>
          <p>{`Species: ${props.plantData.species}`}</p>
          <p>{`H2o Frequency: ${props.plantData.h2o_frequency}`}</p>
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