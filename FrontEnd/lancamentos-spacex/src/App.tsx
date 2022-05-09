import './App.css';
import { Principal } from './pages/principal/principal';

function App() {
  if(!process.env.REACT_APP_BACKEND){
    throw new Error('Sem configuração da URL do backend');
  }

  return (
    <div className="App">
      <header className="App-header">
        Lançamentos da SpaceX
      </header>
      <Principal />
    </div>
  );
}

export default App;
