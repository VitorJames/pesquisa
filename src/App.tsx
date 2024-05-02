// import './App.css'
import { AppRoutes } from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/navbar/index'
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </div>
  )
}

export default App
