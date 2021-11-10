import './App.css';

import {BrowserRouter,Switch,Route} from "react-router-dom"

import Home from './pages/Home'
import Login from './pages/Login'
import Chat from './pages/Chat'
import About from './pages/About'
import Pagina404 from './pages/Pagina404'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path= "/" exact />
        <Route component={Login} path= "/login"  />
        <Route component={Home} path= "/main"  />
        <Route component={Chat} path= "/chat"  />
        <Route component={About} path= "/about"  />
        <Route component={Pagina404} path= "*"  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
