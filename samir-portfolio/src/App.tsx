//import styles
import './styles/Principal.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//import the components
import NavBarPrincipal from './components/NavBar'
import BannerPrincipal from './components/Banner';
import SkillsPrincipal from './components/Skills';


function App() {

  return (
    <>
      <div>
        <NavBarPrincipal/>
        <BannerPrincipal/>
        <SkillsPrincipal/>
      </div>
    </>
  )
}

export default App
