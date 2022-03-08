import { Routes, Route } from 'react-router-dom'
import IndexPage from '../pages/IndexPage/IndexPage'
import LoginPage from '../pages/LogInPage/LoginPage'
import PerformancePage from '../pages/PerformancePage/PerformancePage'
import PitchesPage from '../pages/PitchesPage/PitchesPage'
import PlacesPage from '../pages/PlacesPage/PlacesPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SignupPage from '../pages/SignupPage/SignupPage'
import UsersPage from '../pages/UsersPage/UsersPage'

const AppRoutes = () => {

    return(
        <Routes>

            <Route path="/" element={<IndexPage/>}/>
            <Route path="/escuelas" element={<PlacesPage/>}/>
            <Route path="/vias/:place_id" element={<PitchesPage/>}/>
            <Route path="/registro" element={<SignupPage/>}/>
            <Route path="/inicio-sesion" element={<LoginPage/>}/>
            <Route path="/usuarios" element={<UsersPage/>}/>
            <Route path="/perfil" element={<ProfilePage/>}/>
            <Route path="/rendimiento" element={<PerformancePage/>}/>
            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes