import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { Container } from "react-bootstrap"
import UserSearchBar from "../../components/UserSearchBar/UserSearchBar"
import UsersList from "../../components/UsersList/UsersList"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"


const UsersPage = () => {

    const { user } = useContext(AuthContext)

    const [usersInfo, setUsersInfo] = useState([])


    useEffect(() => {
        user && loadUsersInformation()
    }, [user])


    const loadUsersInformation = (words) => {
       

        userService
            .getAllUsers({ words })
            .then(({ data }) => {
                const filteredData = data.filter(friends => friends._id !== user._id )
                setUsersInfo(filteredData)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container className="page">
                <UserSearchBar handleUserSearchBar={loadUsersInformation} />
                {usersInfo && <UsersList usersInfo={usersInfo} />}
            </Container>
        </>

    )
}

export default UsersPage