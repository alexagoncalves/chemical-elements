import './informations.scss';

const Informations = () => {

    return (
        <div className="informations actinoid">
            <h2 className="informations__title">Hydrogen</h2>
            <ul className="informations__list">
                <li className="informations__item">Atomic Number: 108</li>
                <li className="informations__item">Atomic Mass: 5</li>
                <li className="informations__item">Electronic Configuration: {}</li>
                <li className="informations__item">Electronegativity: {}</li>
                <li className="informations__item">Atomic Radius: {}</li>
                <li className="informations__item">Ion Radius: {}</li>
                <li className="informations__item">VanDerWaals Radius: {}</li>
                <li className="informations__item">Ionization Energy: {}</li>
                <li className="informations__item">Electron Affinity: {}</li>
                <li className="informations__item">Oxidation States: {}</li>
                <li className="informations__item">Standart State: {}</li>
                <li className="informations__item">Bonding Type: {}</li>
                <li className="informations__item">Melting Point: {}</li>
                <li className="informations__item">Boiling Point: {}</li>
                <li className="informations__item">Density: {}</li>
                <li className="informations__item">Group Block: {}</li>
                <li className="informations__item">Year Discovered: {}</li>
            </ul>
        </div>
    )
};

export default Informations;