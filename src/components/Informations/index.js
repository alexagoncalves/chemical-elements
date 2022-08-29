import { useSelector } from 'react-redux';
import { slugify } from '../../functions/elements';
import './informations.scss';

const Informations = () => {

    const elementsData = useSelector((state) => state.elements.data);
    const orderToDisplay = useSelector((state) => state.elements.elementsDisplay);
    const selectedElement = orderToDisplay[2];
    const element = elementsData.find(element => element.atomicNumber === selectedElement);

    return (
            <div className={`informations ${slugify(element.groupBlock)}`}>
                <h2 className="informations__title">{element.name}</h2>
                <ul className="informations__list">
                    <li className="informations__item">Atomic Number: {element.atomicNumber}</li>
                    <li className="informations__item">Atomic Mass: {element.atomicMass}</li>
                    <li className="informations__item">Electronic Configuration: {element.electronicConfiguration}</li>
                    <li className="informations__item">Electronegativity: {element.electronegativity}</li>
                    <li className="informations__item">Atomic Radius: {element.atomicRadius}</li>
                    <li className="informations__item">Ion Radius: {element.ionRadius}</li>
                    <li className="informations__item">VanDerWaals Radius: {element.vanDerWaalsRadius}</li>
                    <li className="informations__item">Ionization Energy: {element.ionizationEnergy}</li>
                    <li className="informations__item">Electron Affinity: {element.electronAffinity}</li>
                    <li className="informations__item">Oxidation States: {element.oxidationStates}</li>
                    <li className="informations__item">Standart State: {element.standardState}</li>
                    <li className="informations__item">Bonding Type: {element.bondingType}</li>
                    <li className="informations__item">Melting Point: {element.meltingPoint}</li>
                    <li className="informations__item">Boiling Point: {element.boilingPoint}</li>
                    <li className="informations__item">Density: {element.density}</li>
                    <li className="informations__item">Group Block: {element.groupBlock}</li>
                    <li className="informations__item">Year Discovered: {element.yearDiscovered}</li>
                </ul>
            </div>
    );
};

export default Informations;