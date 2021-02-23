import '../styles/App.scss';
import getForecast from '../controllers/getForecast';
import ForecastWindow from './ForecastWindow';

function App() {

  getForecast("Manchester,uk");

  return (
    <>
      <h1>vaporweather</h1>
      <ForecastWindow />
    </>
  );
}

export default App;
