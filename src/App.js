import Header from './components/Header';
import Home from './components/Home';
import Donate from './components/Donate';

import {
  BrowserRouter as Router,
  //useHistory,
  //useLocation,
  Route,
} from "react-router-dom";
function App() {
  return (
     <Router >
             <Header />
     <Route path='/' exact>
       <Home/>
     </Route>

     <Route path='/donate' exact>
       <Donate />
     </Route>
   
   </Router>

  );
}

export default App;
