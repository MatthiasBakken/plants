import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import "./CreateNewPlant.css"


const initialPlant ={
    id: Date.now(),
    nickName: '',
    species: '',
    h2oFrecuency: '',
    imageUrl: ''
}
const CreatePlantForm = props =>{
    const [plant, setPlant] = useState(initialPlant);
    const history = useHistory()

    const changeHandler =e => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
          });
        
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/plants/' , plant)
        .then(res=> {
            console.log("successfully added plant", plant)
            const newPlant = res.data[res.data.length -1];
            props.addItem(newPlant);
            history.push(`/new-plants`)
        })
        .catch(err => console.log("cannot post plant", {err}));
        
        
    }


    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <h2>Add a New Plant</h2>
                <input
                    type="text"
                    name="nickName"
                    placeholder="Nick Name"
                    onChange={changeHandler}
                    value={plant.name}
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
                    name="h2oFrecuency"
                    placeholder="H2oFrecuency"
                    onChange={changeHandler}
                    value={plant.h2oFrecuency}
                />
                
                <input
                    type="string"
                    name="imageUrl"
                    placeholder="Image URL"
                    onChange={changeHandler}
                    value={plant.imageUrl}
                />
                
                <button>Add Plant</button>
            
            </form>
        </div>
    )
}




export default CreatePlantForm;