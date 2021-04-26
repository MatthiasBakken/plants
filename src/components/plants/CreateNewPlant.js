import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import "./CreateNewPlant.css"

const CreatePlant = props =>{



    return(
        <div>
            
            <form className="AddPlant">
                <h2>Add a New Plant</h2>
                <input
                    type="text"
                    name="name"
                        placeholder="Nick Name"
                />
                <input
                    type="text"
                    name="species"
                    placeholder="Species"
                />
                <input
                    type="number"
                    name="waterFrequency"
                    placeholder="H2oFrecuency"
                />
                
                <input
                    type="string"
                    name="imageURL"
                    placeholder="Image URL"
                />
                
                <button>Add Plant</button>
            
            </form>
        </div>
    )
}




export default CreatePlant;