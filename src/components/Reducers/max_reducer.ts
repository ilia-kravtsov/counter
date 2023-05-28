export type FirstLoadMaxType = {
    type: 'FIRST_LOAD_MAX'
    newMxValue: number
}
export type MaxValueChangeType = {
    type: 'MAX_VALUE_CHANGE'
    event: number
}
export type UpArrowMaxClickType = {
    type: 'UP_ARROW_MAX_CLICK'
    maxValue: number
}
export type DownArrowMaxClickType = {
    type: 'DOWN_ARROW_MAX_CLICK'
    maxValue: number
}

export type ActionsType = FirstLoadMaxType | MaxValueChangeType | UpArrowMaxClickType | DownArrowMaxClickType

export const maxReducer = (state: number = 5, action: ActionsType): number => {
    switch (action.type) {
        case 'FIRST_LOAD_MAX':
            return state = action.newMxValue
        case "MAX_VALUE_CHANGE":
            return state = action.event
        case "UP_ARROW_MAX_CLICK":
            return state = action.maxValue
        case "DOWN_ARROW_MAX_CLICK":
            return state = action.maxValue
        default:
            return state
    }
}

export const firstLoadMaxAC = (newMxValue: number): FirstLoadMaxType => {
    return {type: 'FIRST_LOAD_MAX', newMxValue}
}
export const maxValueChangeAC = (event: number): MaxValueChangeType => {
    return {type: 'MAX_VALUE_CHANGE', event}
}
export const upArrowMaxClickAC = (maxValue: number): UpArrowMaxClickType => {
    return {type: 'UP_ARROW_MAX_CLICK', maxValue}
}
export const downArrowMaxClickAC = (maxValue: number): UpArrowMaxClickType => {
    return {type: 'UP_ARROW_MAX_CLICK', maxValue}
}