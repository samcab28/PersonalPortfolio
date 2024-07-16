import './styles/Principal.css'
import NavBarPrincipal from './components/NavBar'
import BannerPrincipal from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div>
        <NavBarPrincipal/>
        <BannerPrincipal/>
      </div>
    </>
  )
}

export default App
