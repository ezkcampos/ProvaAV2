import './App.css';



import Routes from './routes';

import {UsuarioProvider} from './contexts/user'

import './services/firebase';

function App() {
  return (
    <UsuarioProvider>
      <Routes/>
    </UsuarioProvider> 
  );
}

export default App;
