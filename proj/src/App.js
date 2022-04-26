import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CustomerList from './components/CustomerList';
import CustomerCreate from './components/CustomerCreate';
import AppNavBar from './components/AppNavBar';
import CustomerView from './components/CustomerView';
import FoodList from './components/FoodList';
import FoodCreate from './components/FoodCreate';
import FoodView from './components/FoodView';
import RestaurantList from './components/RestaurantList';
import RestaurantCreate from './components/RestaurantCreate';

function App(props) {
  return (
    <div className="App">
      <Router>
        <AppNavBar/>
        <div className='ui container' key={props.location.key}>
          <Switch>
            <Route exact path="/" component={CustomerList}></Route>
            <Route path="/customers" component={CustomerList}></Route>
            <Route path="/add-customer/:id" component={CustomerCreate}></Route>
            <Route path="/view-customer/:id" component={CustomerView}></Route>

            <Route path="/foods" component = {FoodList}></Route>
            <Route path="/add-food/:id"  component = {FoodCreate}></Route>
            <Route path="/view-food/:id" component={FoodView}></Route>

            <Route path="/restaurants" component = {RestaurantList}></Route>
            <Route path="/add-restaurant/:id"  component = {RestaurantCreate}></Route>
          </Switch>
        </div>
      </Router>
        {/* <AppFooterBar/> */}
    </div>
  );
}

export default App;
