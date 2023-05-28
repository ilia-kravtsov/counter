export type FirstLoadMinType = {
    type: 'FIRST_LOAD_MIN'
    newMnValue: number
}
export type MinValueChangeType = {
    type: 'MIN_VALUE_CHANGE'
    event: number
}
export type UpArrowMinClickType = {
    type: 'UP_ARROW_MIN_CLICK'
    minValue: number
}
export type DownArrowMinClickType = {
    type: 'DOWN_ARROW_MIN_CLICK'
    minValue: number
}

export type ActionsType = FirstLoadMinType | MinValueChangeType | UpArrowMinClickType | DownArrowMinClickType

export const minReducer = (state: number = 0, action: ActionsType): number => {
    switch (action.type) {
        case 'FIRST_LOAD_MIN':
            return state = action.newMnValue
        case 'MIN_VALUE_CHANGE':
            return state = action.event
        case 'UP_ARROW_MIN_CLICK':
            return state = action.minValue
        case 'DOWN_ARROW_MIN_CLICK':
            return state = action.minValue
        default:
            return state
    }
}

export const firstLoadMinAC = (newMnValue: number): FirstLoadMinType => {
    return {type: 'FIRST_LOAD_MIN', newMnValue}
}
export const minValueChangeAC = (event: number): MinValueChangeType => {
    return {type: 'MIN_VALUE_CHANGE', event}
}
export const upArrowMinClickAC = (minValue: number): UpArrowMinClickType => {
    return {type: 'UP_ARROW_MIN_CLICK', minValue}
}
export const downArrowMinClickAC = (minValue: number): DownArrowMinClickType => {
    return {type: 'DOWN_ARROW_MIN_CLICK', minValue}
}
