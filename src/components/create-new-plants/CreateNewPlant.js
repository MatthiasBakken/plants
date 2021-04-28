import React, { useState } from 'react';

import axios from 'axios';

import "./CreateNewPlant.css"


const initialPlant = {
    nickname: '',
    species: '',
    h2o_frequency: '',
    image: ''
}

const jwtToken = localStorage.getItem( "jwtToken" );
const userId = localStorage.getItem( "userId" );

const CreatePlantForm = () => {
    const [ plant, setPlant ] = useState( initialPlant );

    const changeHandler = e => {
        setPlant( {
            ...plant,
            [ e.target.name ]: e.target.value
        } );
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        axios.post( 'https://tt157-backend.herokuapp.com/api/plants', {
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
                axios.post( `https://tt157-backend.herokuapp.com/api/users/${userId}`, {
                    plant_id: plantRes.data.id,
                }, { headers: { authorization: `bearer ${jwtToken}` } } )
                    .then( userRes => {
                        console.log( userRes );
                        window.location.replace( "/plants" );
                    } );
            } )
            .catch( err => console.log( "cannot post plant", { err } ) );
        
        
    };

    if ( jwtToken ) {
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
                
                    <button disabled={!(plant.nickname && plant.species && plant.h2o_frequency)}>Add Plant</button>
            
                </form>
            </div>
        );
    } else {
        window.location.replace( '/login' );
    };
};




export default CreatePlantForm;