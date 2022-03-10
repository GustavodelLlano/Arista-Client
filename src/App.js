import AppRoutes from './routes/AppRoutes';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer'
import UserMessage from './components/UserMessage/UserMessage';



function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <UserMessage/>
      <Footer />
    </>
  )
}

export default App
