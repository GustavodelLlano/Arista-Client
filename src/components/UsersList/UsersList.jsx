import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"


const UsersList = ({ usersInfo }) => {
    console.log(usersInfo)
    const { isLoggedIn, user } = useContext(AuthContext)
    const navigate = useNavigate()


    const addFriend = (user_id) => {
        userService
            .addFriend(user_id)
            .then(() => navigate('/perfil'))
            .catch(err => console.log(err))
    }




    return (

        usersInfo ?
            <>

                <h1> Encuentra a tus amigos!!</h1>

                {usersInfo?.map(elm => {

                    return (
                        <div>

                            {isLoggedIn && <IconButton aria-label="personAddIcon" size="large" onClick={() => addFriend(elm._id)} >
                                <PersonAddIcon fontSize="inherit" />
                            </IconButton>}

                            <Card style={{ width: '18rem' }} key={elm._id}>
                                <Card.Img variant="top" src={elm.profilePic} />
                                <Card.Body>
                                    <Card.Title>Username</Card.Title>
                                    <Card.Text>
                                        {elm.username}
                                    </Card.Text>
                                    <Card.Title>Descripción</Card.Title>
                                    <Card.Text>
                                        {elm.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        </div>
                    )
                })}

            </>
            :
            <>Loading...</>
    )



}

export default UsersList