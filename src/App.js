import './App.css';
import {Fragment} from "react";
import Navbar  from "./Components/Navbar";
import Content from './Components/UI/Content';
function App() {
  return (
    <Fragment>
      <Navbar/>
      <Content></Content>
    </Fragment>
  );
}

export default App;
