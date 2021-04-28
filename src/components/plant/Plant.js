import React from 'react';

import axios from 'axios';


const Plant = ( props ) => {
  console.log( 'props', props );

  const jwtToken = localStorage.getItem( "jwtToken" );
  const userId = localStorage.getItem( "userId" );
  console.log( jwtToken );
  const onClickEditHandler = () => {
  }

  const onClickDeleteHandler = () => {

    console.log( "plant id", props.plantData.id );

    axios.delete( `https://tt157-backend.herokuapp.com/api/users/${userId}/plant`,
      { data: { plant_id: props.plantData.id } }, {
      headers: { authorization: `bearer ${jwtToken}` }
    }
    ).then( res => {
      console.log( res );
    } ).catch( err => {
      console.log( err );
    } );
  };

  return (
    <div className="plant">
      <p>{`NickName: ${props.plantData.nickname}`}</p>
      <p>{`Species: ${props.plantData.species}`}</p>
      <p>{`H2o Frequency: ${props.plantData.h2o_frequency}`}</p>
      <img src={`${props.plantData.image ? `${props.plantData.image}` : 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}`} alt="plant picture" />
      <span>
        <button onClick={() => onClickEditHandler()}>Edit</button>
        <button onClick={() => onClickDeleteHandler()} >Delete</button>
      </span>
    </div>
  )
}

export default Plant;