import './App.css';
import {Fragment} from "react";
import { Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
function App() {
  return (
    <Fragment>
      <Route path='/' exact>
        <Landingpage/>
      </Route>
    </Fragment>
  );
}

export default App;
