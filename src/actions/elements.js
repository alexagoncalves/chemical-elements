export const GET_ELEMENTS_FROM_API = 'GET_ELEMENTS_FROM_API';
export const ELEMENTS_DATA_SAVE = 'ELEMENTS_DATA_SAVE';
export const GET_CURRENT_ELEMENTS_IN_DISPLAY = 'GET_CURRENT_ELEMENTS_IN_DISPLAY';

export const getElementsFromApi = () => ({
    type: GET_ELEMENTS_FROM_API,
})

export const elementsDataSave = (apiData) => ({
    type: ELEMENTS_DATA_SAVE,
    elements: apiData,
})

export const getCurrentElementsInDisplay = (currentDisplay) => ({
    type: GET_CURRENT_ELEMENTS_IN_DISPLAY,
    display: currentDisplay,
})