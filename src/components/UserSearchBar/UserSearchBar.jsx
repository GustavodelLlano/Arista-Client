
import { useState } from 'react'
import { FormControl, InputGroup, Placeholder } from 'react-bootstrap';
import "./UserSearchBar.css"



function UserSearchBar({ handleUserSearchBar }) {

    const handleInputSearch = e => {

        handleUserSearchBar(e.target.value)
    }
    return (
        <div className="userSearch">

            < input type="text" placeholder="Busca a tus amigos" className="userBar" onChange={handleInputSearch} />


        </div>
    );
}

export default UserSearchBar