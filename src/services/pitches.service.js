import axios from "axios"

class PitchesService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/pitches` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {

                config.headers = { Authorization: `Bearer ${storedToken}` }

            }
            
            return config
        })
    }

    getAllPitches = () => {
        return this.api.get('/getAllPitches')
    }

    getOnePitch = pitch_id => {
        return this.api.get(`/getOnePitch/${pitch_id}`)
    }

    getSavePitch = () => {
        return this.api.get('/savePitch')
    }

    savePitch = (pitch, place_id) => {
        return this.api.post('/savePitch', pitch, place_id)
    }

    updatePitch = (pitch, pitch_id) => {
        return this.api.put(`/update/${pitch_id}`, pitch)
    }

    deletePitch = (pitch_id) => {
        return this.api.delete(`/delete/${pitch_id}`)
    }
}

const pitchesService = new PitchesService()

export default pitchesService