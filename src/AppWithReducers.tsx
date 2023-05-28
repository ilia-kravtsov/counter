import React, {ChangeEvent, useEffect, useReducer} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {
    addCounterAC,
    counterReducer,
    firstLoadCounterAC,
    resetCounterAC,
    setNewValueCounterAC
} from "./components/Reducers/counter_reducer";
import {
    downArrowMinClickAC,
    firstLoadMinAC,
    minReducer,
    minValueChangeAC,
    upArrowMinClickAC
} from "./components/Reducers/min_reducer";
import {
    downArrowMaxClickAC,
    firstLoadMaxAC,
    maxReducer,
    maxValueChangeAC,
    upArrowMaxClickAC
} from "./components/Reducers/max_reducer";
import {displayReducer, newDisplayValueAC} from "./components/Reducers/display_reducer";

function AppWithReducers() {

    let [minValue, dispatchMinValue] = useReducer(minReducer, 0)
    let [maxValue, dispatchMaxValue] = useReducer(maxReducer, 5)
    let [counter, dispatchCounter] = useReducer(counterReducer, 0)
    let [display, dispatchDisplay] = useReducer(displayReducer,'')

    useEffect(() => {
        let newMinValue = localStorage.getItem('minValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMinValue && newMaxValue) {
            let newMnValue = JSON.parse(newMinValue)
            let newMxValue = JSON.parse(newMaxValue)
            dispatchMaxValue(firstLoadMaxAC(newMxValue))
            dispatchMinValue(firstLoadMinAC(newMnValue))
            dispatchCounter(firstLoadCounterAC(newMnValue))
        } else {
            localStorage.setItem('minValue', JSON.stringify(0))
            localStorage.setItem('maxValue', JSON.stringify(5))
        }
    }, [])
    useEffect(() => {
        let newMinValue = localStorage.getItem('minValue')
        if (newMinValue) {
            let newMnValue = JSON.parse(newMinValue)
            if (newMnValue < 0) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }
        }
    }, [maxValue])

    const onAddCounterClick = () => dispatchCounter(addCounterAC())
    const onResetCounterClick = () => dispatchCounter(resetCounterAC(minValue))
    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let event = +e.currentTarget.value
        if (Number.isInteger(event) && event < 1000000) {
            dispatchMaxValue(maxValueChangeAC(event))
            localStorage.setItem('maxValue', JSON.stringify(event))
            if (event < 0) dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            if (event >= 0) dispatchDisplay(newDisplayValueAC('enter values and press "set"'))
        } else {
            dispatchDisplay(newDisplayValueAC('Incorrect value!'))
        }
    }
    const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let event = +e.currentTarget.value
        if (Number.isInteger(event) && event < 999999) {
            dispatchMinValue(minValueChangeAC(event))
            localStorage.setItem('minValue', JSON.stringify(event))
            if (event < 0)  dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            if (event >= 0) dispatchDisplay(newDisplayValueAC('enter values and press "set"'))
        } else {
            dispatchDisplay(newDisplayValueAC('Incorrect value!'))
        }
    }
    const onSetClick = () => {
        let newMinValue = localStorage.getItem('minValue')
        if (newMinValue) {
            let newValue = JSON.parse(newMinValue)
            dispatchCounter(setNewValueCounterAC(newValue))
            dispatchDisplay(newDisplayValueAC(''))
        }
    }
    const onUpArrowMaxClick = () => {
        dispatchMaxValue(upArrowMaxClickAC(maxValue + 1))
        localStorage.setItem('maxValue', JSON.stringify(maxValue + 1))
        let newMaxValue = localStorage.getItem('maxValue')
        let newMinValue = localStorage.getItem('minValue')
        if (newMaxValue && newMinValue) {
            let newMxValue = JSON.parse(newMaxValue)
            let newMnValue = JSON.parse(newMinValue)
            if (newMxValue <= newMnValue) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }
            if (newMxValue < 0) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }
            if (newMxValue >= 0) {
                dispatchDisplay(newDisplayValueAC('enter values and press "set"'))
            }
            if (newMxValue > 1000000 || newMnValue > 999999 ) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }

        }
    }
    const onDownArrowMaxClick = () => {
        dispatchMaxValue(downArrowMaxClickAC(maxValue - 1))
        localStorage.setItem('maxValue', JSON.stringify(maxValue - 1))
        let newMinValue = localStorage.getItem('minValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue && newMinValue) {
            let newMxValue = JSON.parse(newMaxValue)
            let newMnValue = JSON.parse(newMinValue)
            if (newMxValue >= 0 && newMnValue >= 0) {
                dispatchDisplay(newDisplayValueAC('enter values and press "set"'))
            }
            if (newMxValue <= newMnValue) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }
            if (newMxValue < 0) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }
            if (newMxValue > 1000000 || newMnValue > 999999 ) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }
        }
    }
    const onUpArrowMinClick = () => {
        dispatchMinValue(upArrowMinClickAC(minValue + 1))
        localStorage.setItem('minValue', JSON.stringify(minValue + 1))
        let newMinValue = localStorage.getItem('minValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMinValue && newMaxValue) {
            let newMnValue = JSON.parse(newMinValue)
            let newMxValue = JSON.parse(newMaxValue)
            if (newMnValue >= 0) {
                dispatchDisplay(newDisplayValueAC('enter values and press "set"'))
            }
            if (newMxValue <= newMnValue) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }
            if (newMnValue < 0) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }
            if (newMxValue > 1000000 || newMnValue > 999999 ) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }

        }
    }
    const onDownArrowMinClick = () => {
        dispatchMinValue(downArrowMinClickAC(minValue - 1))
        localStorage.setItem('minValue', JSON.stringify(minValue - 1))
        let newMinValue = localStorage.getItem('minValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMinValue && newMaxValue) {
            let newMnValue = JSON.parse(newMinValue)
            let newMxValue = JSON.parse(newMaxValue)
            if (newMnValue >= 0) {
                dispatchDisplay(newDisplayValueAC('enter values and press "set"'))
            }
            if (newMnValue === 0) {
                dispatchDisplay(newDisplayValueAC('enter values and press "set"'))
            }
            if (newMxValue <= newMnValue) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }
            if (newMnValue < 0) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }
            if (newMxValue > 1000000 || newMnValue > 999999 ) {
                dispatchDisplay(newDisplayValueAC('Incorrect value!'))
            }

        }

    }

    let disabledReset: boolean = false
    let disabledAdd: boolean = false
    let disabledSet: boolean = false
    let counterDisplay: string = s.counterDisplay
    let minValueColorClass = 'rgba(25,118,210,0.72)'
    let maxValueColorClass = 'rgba(25,118,210,0.72)'
    let minBackColor = ''
    let maxBackColor = ''

    if (counter <= minValue) {
        disabledReset = true
    }
    if (counter >= maxValue) {
        disabledAdd = true
        counterDisplay = `${s.counterDisplay} ${s.colorRed}`
    }
    if (display === 'enter values and press "set"') {
        counterDisplay = `${s.counterDisplay} ${s.error}`
        disabledAdd = true
        disabledReset = true
    }
    if (display === 'Incorrect value!') {
        disabledReset = true
        disabledAdd = true
        disabledSet = true
        counterDisplay = `${s.counterDisplay} ${s.error} ${s.colorRed}`
        minValueColorClass = 'white'
        maxValueColorClass = 'white'
        minBackColor = 'rgba(210,0,31,0.72)'
        maxBackColor = 'rgba(210,0,31,0.72)'
    }
    if (display === '') {
        disabledSet = true
    }
    if (minValue >= maxValue) {
        minValueColorClass = 'white'
        maxValueColorClass = 'white'
        minBackColor = 'rgba(210,0,31,0.72)'
        maxBackColor = 'rgba(210,0,31,0.72)'
        display = 'Incorrect value!'
        counterDisplay = `${s.counterDisplay} ${s.error} ${s.colorRed}`
        disabledReset = true
        disabledAdd = true
        disabledSet = true
    }
    if (maxValue < 0) {
        disabledReset = true
        disabledAdd = true
        disabledSet = true
        maxBackColor = 'rgba(210,0,31,0.72)'
        minBackColor = 'rgba(210,0,31,0.72)'
        display = 'Incorrect value!'
        counterDisplay = `${s.counterDisplay} ${s.error} ${s.colorRed}`
        maxValueColorClass = 'white'
    }
    if (minValue < 0) {
        disabledReset = true
        disabledAdd = true
        disabledSet = true
        minBackColor = 'rgba(210,0,31,0.72)'
        display = 'Incorrect value!'
        counterDisplay = `${s.counterDisplay} ${s.error} ${s.colorRed}`
        minValueColorClass = 'white'
        maxValueColorClass = 'white'
    }
    if (minValue < 0 && maxValue < 0) {
        disabledReset = true
        disabledAdd = true
        disabledSet = true
        minBackColor = 'rgba(210,0,31,0.72)'
        maxBackColor = 'rgba(210,0,31,0.72)'
        display = 'Incorrect value!'
        counterDisplay = `${s.counterDisplay} ${s.error} ${s.colorRed}`
        minValueColorClass = 'white'
        maxValueColorClass = 'white'
    }

    return (
        <div className={s.App}>
            <Settings onDownArrowMaxClick={onDownArrowMaxClick}
                      onDownArrowMinClick={onDownArrowMinClick}
                      maxValueColorClass={maxValueColorClass}
                      minValueColorClass={minValueColorClass}
                      onUpArrowMaxClick={onUpArrowMaxClick}
                      onUpArrowMinClick={onUpArrowMinClick}
                      onMaxValueChange={onMaxValueChange}
                      onMinValueChange={onMinValueChange}
                      minBackColor={minBackColor}
                      maxBackColor={maxBackColor}
                      disabledSet={disabledSet}
                      onSetClick={onSetClick}
                      maxValue={maxValue}
                      minValue={minValue}
            />
            <Counter onResetCounterClick={onResetCounterClick}
                     onAddCounterClick={onAddCounterClick}
                     counterDisplay={counterDisplay}
                     disabledReset={disabledReset}
                     disabledAdd={disabledAdd}
                     counter={counter}
                     display={display}
            />
        </div>
    );
}

export default AppWithReducers;
