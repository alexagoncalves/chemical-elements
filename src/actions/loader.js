export const DATA_LOADING = 'DATA_LOAD';

export const loadingData = (newValue) => ({
    type: DATA_LOADING,
    value: newValue,
})