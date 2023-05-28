import {
    addCounterAC,
    counterReducer,
    firstLoadCounterAC,
    resetCounterAC,
    setNewValueCounterAC
} from "./counter_reducer";

test('counter should add one', () => {
    const startState: number = 0

    const endState = counterReducer(startState, addCounterAC())

    expect(endState).toBe(startState + 1)
    expect(startState).toBe(0)
})

test('counter should be reset', () => {
    const startState: number = 5
    const minValue = 1
    const endState = counterReducer(startState, resetCounterAC(minValue))

    expect(endState).toBe(minValue)
    expect(startState).toBe(5)
})

test('counter first load should save previous value', () => {
    const startState: number = 0
    const newMnValue = 2
    const endState = counterReducer(startState, firstLoadCounterAC(newMnValue))

    expect(endState).toBe(newMnValue)
})

test('counter should set new value', () => {
    const startState: number = 0
    const newValue = 3
    const endState = counterReducer(startState, setNewValueCounterAC(newValue))

    expect(endState).toBe(newValue)
})


