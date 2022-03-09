import React,{Component,useState} from 'react';
import { useLocation ,useHistory,Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PlanTrip from './PlanTrip';
import Header from './components/HeaderComponent';
import SpotDetail from './components/SpotDetails';
function Main(){
  
  const [loggedIn, setloggedIn] = useState(false);
  const history = useHistory();
  const location = useLocation();
    const HomePage = () => {
      return(
        <Home loggedIn={loggedIn} setloggedIn={setloggedIn}/>
      );
    }
    const LoginPage = () => {
      return(
        <Login loggedIn={loggedIn} setloggedIn={setloggedIn} history={history}/>
      );
    }
    return (
      <div>
          <Header loggedIn={loggedIn} setloggedIn={setloggedIn}/>
          <Switch>
            <Route exact path='/home' component={HomePage} />
            {/* <Route exact path='/venues' component={VenuePage} />
            <Route path='/venues/' component={VenueDetailsPage} />
            <Route exact path='/vendors' component={VendorsPage} />
            <Route exact path='/vendors/:category' component={VendorslistPage} />
            <Route path='/vendors/:category/' component={VendorDetailsPage} />
            <Route exact path='/stores' component={StoresPage} />
            <Route path='/stores/' component={StoreDetailsPage} />
            <Route exact path='/register' component={RegisterPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/logout' component={Login} /> */}
            <Route path='/spots/' component={SpotDetail} />
            <Route exact path='/plantrip' component={PlanTrip} />
            <Route exact path='/login' component={LoginPage} />
            <Redirect to="/home" />
          </Switch>
      </div>
    );
}

export default Main;
