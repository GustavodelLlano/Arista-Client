import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import pitchesService from "../../services/pitches.service"
import placeService from "../../services/places.service"
import uploadService from '../../services/upload.service'


const NewPitchForm = ({ closeModal, refreshPitches }) => {


    const [pitchData, setPitchData] = useState({
        name: "",
        meters: "",
        diff: "",
        points: 0,
        quickdraws: 0,
        sector: "",
        place_id: ""
    })

    const [placesId, setPlacesId] = useState([])

    const { name, meters, diff, points, quickdraws, sector, place_id } = pitchData

    useEffect(() => {
        getPlacesId()
    }, [place_id])

    const getPlacesId = () => {
        pitchesService
            .getSavePitch()
            .then(({ data }) => {
                setPlacesId(data)
            })
            .catch(err => console.log(err))
    }


    const handleInputChange = e => {

        const { value, name } = e.target

        setPitchData({
            ...pitchData,
            [name]: value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        pitchesService
            .savePitch({ name, meters, diff, points, quickdraws, sector, place_id })
            .then(({ data }) => {
                console.log(data)
                refreshPitches()
                closeModal()
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="place_id">
            <Form.Label>Escuela a la que pertenece</Form.Label>
                <Form.Select name="place_id" onChange={handleInputChange} aria-label="Default select example">
                <option >Elija escuela</option>
                    {
                        placesId.map(elm => {
                            return (<option value={elm._id}>{elm.name}</option>)
                        })
                    }
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre de la vía</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Metros</Form.Label>
                <Form.Control type="number" value={meters} onChange={handleInputChange} name="meters" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lat">
                <Form.Label>Dificultad</Form.Label>
                <Form.Control type="text" value={diff} onChange={handleInputChange} name="diff" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lng">
                <Form.Label>Puntuación</Form.Label>
                <Form.Control type="number" value={points} onChange={handleInputChange} name="points" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lng">
                <Form.Label>Cintas express</Form.Label>
                <Form.Control type="number" value={quickdraws} onChange={handleInputChange} name="quickdraws" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lat">
                <Form.Label>Sector</Form.Label>
                <Form.Control type="text" value={sector} onChange={handleInputChange} name="sector" />
            </Form.Group>


            <div className="d-grid gap-2">
                <Button variant="dark" type="submit" >Crear vía</Button>
            </div>

        </Form >

    )
}

export default NewPitchForm