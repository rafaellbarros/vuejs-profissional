import axios from 'axios'
import store from '../store'

const apiPublic = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 100000,
})

const apiProtected = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 100000,
    headers: {
        'x-access-token': store.state.token,
    },
})

export { apiPublic, apiProtected }
