import axios from 'axios'
import { AsynStorage } from 'react-native'
const url = 'http://192.168.6.196:3002'

export const insertScore = (data) => {
    console.log(data);
    return {
        type: 'ADD_SCORE',
        payload: axios.post(`${url}/scores`, data,
        {
            headers: {
                'authorization': 'khusni'
            }
        })
    }
}

export const getScore = () => {
    return {
        type: 'GET_SCORE',
        payload: axios.get(`${url}/scores`, 
        {
            headers: {
                'authorization': 'khusni'
            }
        })
    }
}

export const getScoreById = (id_user) => {
    return {
        type: 'GET_SCORE_ID',
        payload: axios.get(`${url}/scores/${Number(id_user)}`,
        {
            headers: {
                'authorization': 'khusni'
            }
        })
    }
}