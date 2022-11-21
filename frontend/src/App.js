
import './App.css';
import { useGetPokemonByNameQuery } from './services/pokemon';
function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  return (
    <div className="App">
      Hola Mundo
    </div>
  );
}

export default App;
