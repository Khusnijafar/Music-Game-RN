import axios from 'axios'
import { AsyncStorage } from 'react-native'
const url = 'http://192.168.6.196:3002'

export const getSound = () => {
    return {
        type: 'GET_SOUND',
        payload: axios.get(`${url}/sounds`,
        {
            headers: {
                'authorization': 'khusni'
            }
        })
    }
}