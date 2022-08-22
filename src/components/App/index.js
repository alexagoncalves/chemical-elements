// == Import
import './app.scss';
import Carousel from '../Carousel';
import Informations from '../Informations';

// == Composant
const App = () => (
  <div className="app">
      <Carousel/>
      <Informations/>
  </div>
);

// == Export
export default App;
