import AppRoutes from './routes/AppRoutes';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer'



function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
