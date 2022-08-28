// == Import
import './app.scss';
import Carousel from '../Carousel';
import Informations from '../Informations';

import { getElementsFromApi } from '../../actions/elements';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


// == Composant
const App = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);

  useEffect(() => {
    dispatch(getElementsFromApi());
  }, []);

  return (
    <div className="app">
      {!loading && (
        <>
        <Carousel/>
        <Informations/>
        </>
        )
      }
      </div> 
  );
}

// == Export
export default App;
