import axios from 'axios'
import { AsyncStorage } from 'react-native'
const url = 'http://192.168.6.196:3002'

export const getPattern = () => {
    return {
        type: 'GET_PATTERN',
        payload: axios.get(`${url}/patterns`,
        {
            headers: {
                'authorization': 'khusni'
            }
        })
    }
}