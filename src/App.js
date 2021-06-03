import Header from './components/Header';
import Home from './components/Home';
import Donate from './components/Donate';
import About from './components/About';

import {
  BrowserRouter as Router,
  //useHistory,
  //useLocation,
  Route,
} from "react-router-dom";
function App() {
  return (
     <Router basename={process.env.PUBLIC_URL}>
             <Header />
     <Route path='/' exact>
       <Home/>
     </Route>

     <Route path='/donate' exact>
       <Donate />
     </Route>

     <Route path='/about' exact>
       <About />
     </Route>
   
   </Router>

  );
}

export default App;
