import '../styles/App.css';
import getForecast from '../controllers/getForecast';

function App() {

  getForecast();

  return (
    <h1>vaporweather</h1>
  );
}

export default App;
