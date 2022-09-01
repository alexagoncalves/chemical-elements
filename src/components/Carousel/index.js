import { useSelector, useDispatch } from 'react-redux';
import './carousel.scss';
import { getElementsToDisplay, slugify } from '../../functions/elements';
import { switchMode } from '../../actions/app';

const Carousel = () => {

    const dispatch = useDispatch();

    const elementsData = useSelector((state) => state.elements.data);
    const orderToDisplay = useSelector((state) => state.elements.elementsDisplay);
    const colorMode = useSelector((state) => state.app.darkMode);

    const elementsInDisplay = getElementsToDisplay(orderToDisplay, elementsData);

    
     return (
        <div className="carousel">
            <h1 className="carousel__title">Chemical Elements</h1>
            <label className="switch">
                <input type="checkbox" onClick = {(e) => {
                    dispatch(switchMode(!colorMode))
                }}/>
                <span className="slider round"></span>
                </label>
            <ul className="carousel__list">
                {elementsInDisplay.map((element, index) => (
                    <li className={`carousel__item ${slugify(element.groupBlock)}`} data-pos={index} data-before={element.symbol} key={index}><span className="carousel__item-number">{element.atomicNumber}</span></li>
                )) 
                }
            </ul>
        </div>
    )
};

export default Carousel;