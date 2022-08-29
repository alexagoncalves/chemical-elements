// == Import
import './app.scss';
import Carousel from '../Carousel';
import Informations from '../Informations';

import { getCurrentElementsInDisplay, getElementsFromApi } from '../../actions/elements';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { scrollDown, scrollUp } from '../../functions/elements';


// == Composant
const App = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const elementsDisplay = useSelector((state) => state.elements.elementsDisplay);

  const scrollDirection = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      dispatch(getCurrentElementsInDisplay(scrollDown(elementsDisplay)))
    } else {
      dispatch(getCurrentElementsInDisplay(scrollUp(elementsDisplay)))
    }
  }

  useEffect(() => {
    dispatch(getElementsFromApi());
  }, []);

  return (
    <div className="app" onWheel={(e) => {
      scrollDirection(e)
    }}>
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
