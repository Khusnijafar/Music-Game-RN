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
        }). then(res => {
            const token = res.data.result.token
            const user_id = res.data.result.user_id
            const fullname = res.data.result.fullname
            const email = res.data.result.email
            const status = res.data.result.status
                // AsyncStorage.setItem('user_id', user_id)
                // AsyncStorage.setItem('jwtToken', token)
                // AsyncStorage.setItem('fullname', fullname)
                // AsyncStorage.setItem('email', email)
                // AsyncStorage.setItem('status', status)
        })
    }
}