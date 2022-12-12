import axios from "axios"
axios.defaults.baseURL = 'https://api.unsplash.com'
axios.defaults.params = {
    client_id: 'EcUD3FjbF7H2sUsq-RQHX57hGc-mKi4obEYLDoeB0ek'
}
export const getRandomPhotos = () => {
    return axios.get('/photos')
}

export const getPhotosByCollection = (collection) => {
    return axios.get(`/search/photos?query=${collection}`)
}