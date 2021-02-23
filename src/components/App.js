import '../styles/App.css';
import getForecast from '../controllers/getForecast';

function App() {

  getForecast("Manchester,uk");

  return (
    <h1>vaporweather</h1>
  );
}

export default App;
