export const SWITCH_DARK_MODE = 'SWITCH_DARK_MODE';

export const switchMode = (newValue) => ({
    type: SWITCH_DARK_MODE,
    value: newValue,
})