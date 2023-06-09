import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [counter, setCounter] = useState<number>(0)
    let [display, setDisplay] = useState<number | string>('')

    useEffect(() => {
        let newMinValue = localStorage.getItem('minValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMinValue && newMaxValue) {
            let newMnValue = JSON.parse(newMinValue)
            let newMxValue = JSON.parse(newMaxValue)
            setMaxValue(newMxValue)
            setMinValue(newMnValue)
            setCounter(newMnValue)
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
                setDisplay('Incorrect value!')
            }
        }
    }, [maxValue])

    const onAddCounterClick = () => {
        setCounter(counter + 1)
    }
    const onResetCounterClick = () => setCounter(minValue)
    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let event = +e.currentTarget.value
        if (Number.isInteger(event) && event < 1000000) {
            setMaxValue(event)
            localStorage.setItem('maxValue', JSON.stringify(event))
            if (event < 0) setDisplay('Incorrect value!');
            if (event >= 0) setDisplay('enter values and press "set"');
        } else {
            setDisplay('Incorrect value!')
        }
    }
    const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let event = +e.currentTarget.value
        if (Number.isInteger(event) && event < 999999) {
            setMinValue(event)
            localStorage.setItem('minValue', JSON.stringify(event))
            if (event < 0) setDisplay('Incorrect value!');
            if (event >= 0) setDisplay('enter values and press "set"');
        } else {
            setDisplay('Incorrect value!')
        }
    }
    const onSetClick = () => {
        let newMinValue = localStorage.getItem('minValue')
        if (newMinValue) {
            let newValue = JSON.parse(newMinValue)
            setCounter(newValue)
            setDisplay('')
        }
    }
    const onUpArrowMaxClick = () => {
        setMaxValue(maxValue + 1)
        localStorage.setItem('maxValue', JSON.stringify(maxValue + 1))
        let newMaxValue = localStorage.getItem('maxValue')
        let newMinValue = localStorage.getItem('minValue')
        if (newMaxValue && newMinValue) {
            let newMxValue = JSON.parse(newMaxValue)
            let newMnValue = JSON.parse(newMinValue)
            if (newMxValue <= newMnValue) {
                setDisplay('Incorrect value!')
            }
            if (newMxValue < 0) {
                setDisplay('Incorrect value!')
            }
            if (newMxValue >= 0) {
                setDisplay('enter values and press "set"')
            }
            if (newMxValue > 1000000 || newMnValue > 999999 ) {
                setDisplay('Incorrect value!')
            }

        }
    }
    const onDownArrowMaxClick = () => {
        setMaxValue(maxValue - 1)
        localStorage.setItem('maxValue', JSON.stringify(maxValue - 1))
        let newMinValue = localStorage.getItem('minValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue && newMinValue) {
            let newMxValue = JSON.parse(newMaxValue)
            let newMnValue = JSON.parse(newMinValue)
            if (newMxValue >= 0 && newMnValue >= 0) {
                setDisplay('enter values and press "set"')
            }
            if (newMxValue <= newMnValue) {
                setDisplay('Incorrect value!')
            }
            if (newMxValue < 0) {
                setDisplay('Incorrect value!')
            }
            if (newMxValue > 1000000 || newMnValue > 999999 ) {
                setDisplay('Incorrect value!')
            }
        }
    }
    const onUpArrowMinClick = () => {
        setMinValue(minValue + 1)
        localStorage.setItem('minValue', JSON.stringify(minValue + 1))
        let newMinValue = localStorage.getItem('minValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMinValue && newMaxValue) {
            let newMnValue = JSON.parse(newMinValue)
            let newMxValue = JSON.parse(newMaxValue)
            if (newMnValue >= 0) {
                setDisplay('enter values and press "set"')
            }
            if (newMxValue <= newMnValue) {
                setDisplay('Incorrect value!')
            }
            if (newMnValue < 0) {
                setDisplay('Incorrect value!')
            }
            if (newMxValue > 1000000 || newMnValue > 999999 ) {
                setDisplay('Incorrect value!')
            }

        }
    }
    const onDownArrowMinClick = () => {
        setMinValue(minValue - 1)
        localStorage.setItem('minValue', JSON.stringify(minValue - 1))
        let newMinValue = localStorage.getItem('minValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMinValue && newMaxValue) {
            let newMnValue = JSON.parse(newMinValue)
            let newMxValue = JSON.parse(newMaxValue)
            if (newMnValue >= 0) {
                setDisplay('enter values and press "set"')
            }
            if (newMnValue === 0) {
                setDisplay('enter values and press "set"')
            }
            if (newMxValue <= newMnValue) {
                setDisplay('Incorrect value!')
            }
            if (newMnValue < 0) {
                setDisplay('Incorrect value!')
            }
            if (newMxValue > 1000000 || newMnValue > 999999 ) {
                setDisplay('Incorrect value!')
            }

        }

    }

    let disabledReset: boolean = false
    let disabledAdd: boolean = false
    let disabledSet: boolean = false
    let counterDisplay: string = s.counterDisplay
    let backMinMaxColor = ''
    let valueColorClass = 'rgba(25,118,210,0.72)'

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
        valueColorClass = 'white'
        backMinMaxColor = 'rgba(210,0,31,0.72)'
    }
    if (display === '') {
        disabledSet = true
    }
    if (minValue >= maxValue) {
        display = 'Incorrect value!'
        counterDisplay = `${s.counterDisplay} ${s.error} ${s.colorRed}`
        disabledReset = true
        disabledAdd = true
        disabledSet = true
        valueColorClass = 'white'
        backMinMaxColor = 'rgba(210,0,31,0.72)'
    }
    if (maxValue < 0) {
        disabledReset = true
        disabledAdd = true
        disabledSet = true
        backMinMaxColor = 'rgba(210,0,31,0.72)'
        display = 'Incorrect value!'
        counterDisplay = `${s.counterDisplay} ${s.error} ${s.colorRed}`
        valueColorClass = 'white'
    }
    if (minValue < 0) {
        disabledReset = true
        disabledAdd = true
        disabledSet = true
        display = 'Incorrect value!'
        counterDisplay = `${s.counterDisplay} ${s.error} ${s.colorRed}`
        valueColorClass = 'white'
        backMinMaxColor = 'rgba(210,0,31,0.72)'
    }
    if (minValue < 0 && maxValue < 0) {
        disabledReset = true
        disabledAdd = true
        disabledSet = true
        backMinMaxColor = 'rgba(210,0,31,0.72)'
        display = 'Incorrect value!'
        counterDisplay = `${s.counterDisplay} ${s.error} ${s.colorRed}`
        valueColorClass = 'white'
    }

    return (
        <div className={s.App}>
            <Settings onDownArrowMaxClick={onDownArrowMaxClick}
                      onDownArrowMinClick={onDownArrowMinClick}
                      maxValueColorClass={valueColorClass}
                      minValueColorClass={valueColorClass}
                      onUpArrowMaxClick={onUpArrowMaxClick}
                      onUpArrowMinClick={onUpArrowMinClick}
                      onMaxValueChange={onMaxValueChange}
                      onMinValueChange={onMinValueChange}
                      minBackColor={backMinMaxColor}
                      maxBackColor={backMinMaxColor}
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

export default App;
