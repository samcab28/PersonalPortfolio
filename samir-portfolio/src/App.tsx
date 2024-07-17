//import styles
import './styles/Principal.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//import the components
import NavBarPrincipal from './components/NavBar'
import BannerPrincipal from './components/Banner';
import SkillsPrincipal from './components/Skills';
import ProjectPrincipal from './components/Project';
import StudiesPrincipal from './components/Studies';
import ExperiencePrincipal from './components/Experience';
import ContactPrincipal from './components/Contact';
import FooterPrincipal from './components/Footer';

function App() {

  return (
    <>
      <div>
        <NavBarPrincipal/>
        <BannerPrincipal/>
        <SkillsPrincipal/>
        <ProjectPrincipal/>
        <StudiesPrincipal/>
        <ExperiencePrincipal/>
        <ContactPrincipal/>
        <FooterPrincipal/>
      </div>
    </>
  )
}

export default App
