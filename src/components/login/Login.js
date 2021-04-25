import React, { useState} from 'react'

import Styles from './styles.scss'

function Login (props){

    const [user, setUser] = useState({
        username:"",
        password:'',
        phonenumber:''
    })

    function setUserInfo(event){
        setUser({event.target.name: event.target.value})
        console.log(user)
    }
    

    return(
        <div>

            <from>
                <label>
                    Username:
                    <input
                    name='username'
                    type='text'
                    placeholder='Username'
                    onChange={setUserInfo}
                    />
                </label>

                <label>
                    Password:
                    <input
                    type='text'
                    placeholder='password...'
                    />
                </label>

                <label>
                    Phone Number:
                    <input
                    type='text'                
                    />
                </label>


            </from>
        </div>
    )
}

export default Login