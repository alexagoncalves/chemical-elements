import './carousel.scss';

const Carousel = () => {

    return (
        <div className="carousel">
            <h1 className="carousel__title">Chemical Elements</h1>
            <ul className="carousel__list">
                <li className="carousel__item alkalimetal"  data-pos="-2"></li>
                <li className="carousel__item alkalineearthmetal" data-pos="-1"></li>
                <li className="carousel__item actinoid" data-pos="0" data-before='Hs' id="1"><span className="carousel__item-number">108</span></li>
                <li className="carousel__item actinoid" data-pos="1"></li>
                <li className="carousel__item actinoid" data-pos="2"></li>
            </ul>
        </div>
    )
};

export default Carousel;