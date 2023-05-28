export type AddCounterType = {
    type: 'ADD_COUNTER'
}
export type ResetCounterType = {
    type: 'RESET_COUNTER'
    minValue: number
}
export type FirstLoadCounterType = {
    type: 'FIRST_LOAD_COUNTER'
    newMnValue: number
}
export type SetNewValueCounterType = {
    type: 'SET_NEW_VALUE'
    newValue: number
}

export type ActionsType = AddCounterType | ResetCounterType | FirstLoadCounterType | SetNewValueCounterType

export const counterReducer = (state: number = 0, action: ActionsType): number => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return state + 1
        case 'RESET_COUNTER':
            return state = action.minValue
        case 'FIRST_LOAD_COUNTER':
            return state = action.newMnValue
        case "SET_NEW_VALUE":
            return state = action.newValue
        default:
            return state
    }
}

export const addCounterAC = (): AddCounterType => {
    return {type: 'ADD_COUNTER'}
}
export const resetCounterAC = (minValue: number): ResetCounterType => {
    return {type: 'RESET_COUNTER', minValue}
}
export const firstLoadCounterAC = (newMnValue: number): FirstLoadCounterType => {
    return {type: 'FIRST_LOAD_COUNTER', newMnValue}
}
export const setNewValueCounterAC = (newValue: number): SetNewValueCounterType => {
    return {type: 'SET_NEW_VALUE', newValue}
}
