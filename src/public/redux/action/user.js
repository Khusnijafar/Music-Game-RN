import axios from 'axios'
import { AsyncStorage } from 'react-native'

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post('http://192.168.6.196:3002/users/login', data, 
        {
            headers: {
                'authorization': 'khusni'
            }
        })
    }
}