import axios from 'axios';

export const axiosWithAuth= () => {
    const token = localStorage.getItem('token')
    
    return axios.create({
        baseURL: 'https://water-my-plants-api-t199.herokuapp.com/api'
    })
}