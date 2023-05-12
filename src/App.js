import Header from './components/Header';
import Home from './components/Home';
import Donate from './components/Donate';
import About from './components/About';
import PrimaryHealthCare from './components/Services/PrimaryHealthCare';
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  //useHistory,
  //useLocation,
  Route,
  useLocation
} from "react-router-dom";
import Nutrition from './components/Services/Nutrition';
import Education from './components/Services/Education';
import Wash from './components/Services/Wash';
import OtherInitiatives from './components/Services/OtherInitiatives';
import OurPartners from './components/OurPartners';
import MotherChildHealthCare from './components/Services/MotherChildHealthCare';
import HealthCare from './components/Services/HealthCare';
import Reports from './components/Reports';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
import BecomeAVolunteer from './components/BecomeAVolunteer';
function App() {
  return (
     <Router basename={process.env.PUBLIC_URL}>
       <ScrollToTop/>
             <Header />
     <Route path='/' exact>
       <Home/>
     </Route>

     <Route path='/donate' exact>
       <Donate />
     </Route>

     <Route path='/services/health-care' exact>
     <HealthCare />
     </Route>
    


     <Route path='/services/primary-health-care' exact>
     <PrimaryHealthCare />
     </Route>
     <Route path='/services/mother-child-health-care' exact>
     <MotherChildHealthCare />
     </Route>
    
     <Route path='/services/nutrition' exact>
     <Nutrition />
     </Route>
     <Route path='/services/education' exact>
     <Education />
     </Route>

     <Route path='/services/wash' exact>
     <Wash />
     </Route>


     <Route path='/services/other-initiatives' exact>
     <OtherInitiatives />
     </Route>
     <Route path='/our-partners' exact>
       <OurPartners />
     </Route>
     <Route path='/about' exact>
       <About/>
     </Route>
     <Route path='/reports' exact>
       <Reports/>
     </Route>
     <Route path='/our-team' exact>
       <OurTeam/>
     </Route>
     <Route path='/contact' exact>
       <Contact/>
     </Route>
     <Route path='/become-a-volunteer' exact>
       <BecomeAVolunteer/>
     </Route>
   </Router>

  );
}

export default App;
