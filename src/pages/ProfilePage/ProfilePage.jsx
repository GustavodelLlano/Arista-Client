import { useState, useEffect } from "react"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import userService from "../../services/user.service"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import FriendsList from "../../components/FriendsList/FriendsList"
import WishPitchesList from "../../components/WishPitchesList/WishPitchesList"
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import WishPlacesCard from "../../components/WishPlacesCard/WishPlacesCard"
import UsersList from "../../components/UsersList/UsersList"

const ProfilePage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)

    const [userProfile, setUserProfile] = useState({})
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        user && loadProfileInformation()
    }, [user])


    const loadProfileInformation = () => {
        userService
            .getOneUser(user._id)
            .then(({ data }) => {
                console.log(data)
                setUserProfile(data)
            })

            .catch(err => console.log(err))

    }

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (
        <>
            <Container>
                <Row>

                    <Col md="4">
                        <h1>Tu perfil</h1>
                        <ProfileCard userProfile={userProfile} />
                        {isLoggedIn && <Button variant="outline-success" onClick={handleModalOpen} >Edita tu perfil!</Button>}
                    </Col>
                    <Col md="8">
                        {userProfile.wishPitches && userProfile.wishPitches.length !== 0 && <WishPitchesList userProfile={userProfile} refreshFavPitches={loadProfileInformation} />}
                    </Col>

                </Row>

                {userProfile.friends && userProfile.friends.length !== 0 && <FriendsList userProfile={userProfile} refreshProfileInformation={loadProfileInformation} />}

                {userProfile.favPlaces && userProfile.favPlaces.length !== 0 && <WishPlacesCard places={userProfile.favPlaces} refreshPlaces={loadProfileInformation} />}





                <Modal show={showModal} onHide={handleModalClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Edita tu perfil!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditProfileForm closeModal={handleModalClose} refreshProfileInformation={loadProfileInformation} userProfile={userProfile} />
                    </Modal.Body>
                </Modal>

            </Container>
        </>
    )
}

export default ProfilePage

