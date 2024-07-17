//import styles
import './styles/Principal.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//import the components
import NavBarPrincipal from './components/NavBar'
import BannerPrincipal from './components/Banner';
import SkillsPrincipal from './components/Skills';
import ProjectPrincipal from './components/Project';


function App() {

  return (
    <>
      <div>
        <NavBarPrincipal/>
        <BannerPrincipal/>
        <SkillsPrincipal/>
        <ProjectPrincipal/>
      </div>
    </>
  )
}

export default App
