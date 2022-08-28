import { useSelector } from 'react-redux';
import './carousel.scss';
import { getElementsToDisplay, slugify } from '../../functions/elements';

const Carousel = () => {

    const elementsData = useSelector((state) => state.elements.data);
    const orderToDisplay = useSelector((state) => state.elements.elementsDisplay);

    const elementsInDisplay = getElementsToDisplay(orderToDisplay, elementsData);
    
     return (
        <div className="carousel">
            <h1 className="carousel__title">Chemical Elements</h1>
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