import axios from 'axios'

class PlaceService {

    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/places` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }

            }

            return config
        })

    }

    getAllPlaces = () => {
        return this.api.get('/getAllPlaces')
    }

    getOnePlace = place_id => {
        return this.api.get(`/getOnePlace/${place_id}`)
    }

    savePlace = place => {
        return this.api.post('/savePlace', place)
    }

    updatePlace = (place_id, place) => {
        return this.api.put(`/update/${place_id}`, place)
    }

    deletePlace = place_id => {
        return this.api.delete(`/delete/${place_id}`)
    }

}

const placeService = new PlaceService()

export default placeService