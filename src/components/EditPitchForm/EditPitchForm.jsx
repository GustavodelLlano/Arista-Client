import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import pitchesService from "../../services/pitches.service"


const EditPitchForm = ({pitch}, refreshPitches, closeModal) =>{

    const [pitchData, setPitchData] = useState({
        name: `${pitch.name}`,
        meters: `${pitch.meters}`,
        diff: `${pitch.diff}`,
        points: `${pitch.points}`,
        quickdraws: `${pitch.quickdraws}`,
        sector: `${pitch.sector}`
    })

    useEffect(()=>{setPitchData(
        { name: `${pitch.name}`,
        meters: `${pitch.meters}`,
        diff: `${pitch.diff}`,
        points: `${pitch.points}`,
        quickdraws: `${pitch.quickdraws}`,
        sector: `${pitch.sector}`}
        )},[pitch])

        const { name, meters, diff, points, quickdraws, sector } = pitchData

        const handleInputChange = e => {

            const { value, name } = e.target
            console.log(pitch._id)
    
            setPitchData({
                ...pitchData,
                [name]: value,
                
            })
        }
        const handleSubmit = e => {

            e.preventDefault()
    
            pitchesService

                .updatePitch( pitchData, pitch._id)
                .then(({ data }) => {
                   
                    refreshPitches()
                    closeModal()
                   
                })
                .catch(err => console.log(err))
        }

    return (
        
        <Form onSubmit={handleSubmit}>


        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre de la vía</Form.Label>
            <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="meters">
            <Form.Label>Metros</Form.Label>
            <Form.Control type="number" value={meters} onChange={handleInputChange} name="meters" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="diff">
            <Form.Label>Dificultad</Form.Label>
            <Form.Control type="text" value={diff} onChange={handleInputChange} name="diff" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="points">
            <Form.Label>Puntuación</Form.Label>
            <Form.Control type="number" value={points} onChange={handleInputChange} name="points" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="quickdraws">
            <Form.Label>Cintas express</Form.Label>
            <Form.Control type="number" value={quickdraws} onChange={handleInputChange} name="quickdraws" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sector">
            <Form.Label>Sector</Form.Label>
            <Form.Control type="text" value={sector} onChange={handleInputChange} name="sector" />
        </Form.Group>


        <div className="d-grid gap-2">
            <Button variant="dark" type="submit" >Editar vía</Button>
        </div>

    </Form >
        
        
    
    )
}

export default EditPitchForm