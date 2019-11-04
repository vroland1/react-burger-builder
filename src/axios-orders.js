import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-builder-aa44f.firebaseio.com/',
})

export default instance;