import './App.css';

// Pages
import Home from './pages/AboutPage/index';
import About from './pages/AboutPage/index';
import SignUp from './pages/SignUpPage/index';
import ShoppingCart from './pages/ShoppingCartPage/index';
import FanFaves from './pages/FanFavesPage/index';
import PieShow from './pages/PieShowPage/index';
import EditPie from './pages/EditPiePage/index';
import CreatePie from './pages/CreatePiePage/index';

// Components
import Header from './components/Header/index';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="signup" component={SignUp} />
        <Route path="cart" component={ShoppingCart} />
        <Route path="fanfaves" component={FanFaves} />
        <Route path="pie" component={PieShow} />
        <Route path="editpie" component={EditPie} />
        <Route path="createpie" component={CreatePie} />
      </Switch>
    </div>
  );
}

export default App;
