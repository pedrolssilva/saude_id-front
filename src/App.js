import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer,Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import History from './services/HistoryService'

import Navbar from "./components/Navbar"
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
import Items from "./pages/Items/List"
import ItemDetail from "./pages/Items/Show"
function App() {
  return (
    <Router history={History}>
       <ToastContainer
        position='bottom-right'
        transition={Slide}
        autoClose={3000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Switch>
        <Route path='/' exact component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/movies' component={Items} />
        <Route path='/details' component={ItemDetail} />
      </Switch>
    </Router>
  );
}

export default App;