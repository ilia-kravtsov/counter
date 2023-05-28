export type NewDisplayValue = {
    type: 'NEW_DISPLAY_VALUE'
    title: string
}

export type ActionsType = NewDisplayValue

export const displayReducer = (state: number | string = '', action: ActionsType): number | string => {
    switch (action.type) {
        case 'NEW_DISPLAY_VALUE':
            return state = action.title
        default:
            return state
    }
}

export const newDisplayValueAC = (title: string): NewDisplayValue => {
    return {type: 'NEW_DISPLAY_VALUE', title}
}

