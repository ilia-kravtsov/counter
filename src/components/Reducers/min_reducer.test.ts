import {
    addCounterAC,
    counterReducer,
    firstLoadCounterAC,
    resetCounterAC,
    setNewValueCounterAC
} from "./counter_reducer";

test('first load min value should be saved', () => {
    const startState: number = 0

    const endState = counterReducer(startState, addCounterAC())

    expect(endState).toBe(startState + 1)
    expect(startState).toBe(0)
})

