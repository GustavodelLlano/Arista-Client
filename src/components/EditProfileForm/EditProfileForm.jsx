import { useContext, useEffect, useState } from "react"
import uploadService from "../../services/upload.service"
import userService from "../../services/user.service"
import { Button, Form } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"


const EditProfileForm = ({ closeModal, refreshProfileInformation, userProfile }) => {

    const { user } = useContext(AuthContext)


    const [profileData, setProfileData] = useState({
        username: `${userProfile.username}`,
        email: `${userProfile.email}`,
        profilePic: `${userProfile.profilePic}`,
        description: `${userProfile.description}`,

    })


    useEffect(() => {
        setProfileData(

            {
                username: `${userProfile.username}`,
                email: `${userProfile.email}`,
                profilePic: `${userProfile.profilePic}`,
                description: `${userProfile.description}`
            }
        )
    }, [userProfile])

    const [loadingImage, setLoadingImage] = useState(false)

    const { username, email, profilePic, description } = profileData

    const handleInputChange = e => {


        const { value, name } = e.target

        setProfileData({
            ...profileData,
            [name]: value
        })
    }

    const uploadPlaceImage = e => {
        setLoadingImage(true)
        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProfileData({ username, email, profilePic: data.cloudinary_url, description })
            })
            .catch(err => console.log(err))
    }




    const handleSubmit = e => {

        e.preventDefault()

        userService
            .editOwnProfile(profileData)
            .then(({ data }) => {
                refreshProfileInformation()
                closeModal()
            })
            .catch(err => console.log(err))
    }



    return (
        <>
            {userProfile &&
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={email} onChange={handleInputChange} name="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                    </Form.Group>
                    <Form.Group controlId="profilePic" className="mb-3">
                        <Form.Label>Imagen de perfil</Form.Label>
                        <Form.Control type="file" onChange={uploadPlaceImage} name="profilePic" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Actualizar información de tu perfil'}</Button>
                    </div>
                </Form >
            }
        </>
    )


}

export default EditProfileForm
