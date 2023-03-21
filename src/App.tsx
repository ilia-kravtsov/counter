import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {IconButton, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

function App() {

    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [counter, setCounter] = useState<number>(0)
    let [display, setDisplay] = useState<number | string>('')

    useEffect(() => {

        let newStartValue = localStorage.getItem('minValue')
        if (newStartValue) {
            let newMnValue = JSON.parse(newStartValue)
            setMinValue(newMnValue)
            setCounter(newMnValue)
        }

        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue) {
            let newMxValue = JSON.parse(newMaxValue)
            setMaxValue(newMxValue)
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
    useEffect(() => {
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue) {
            let newMxValue = JSON.parse(newMaxValue)
            if (newMxValue < 0) {
                setDisplay('Incorrect value!')
            }
        }
    }, [minValue])

    const onAddCounterClick = () => {
        setCounter(counter+1)
    }
    const onResetCounterClick = () => setCounter(minValue)
    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let event = +e.currentTarget.value
        setMaxValue(event)
        localStorage.setItem('maxValue', JSON.stringify(event))
        if (event < 0) setDisplay('Incorrect value!');
        if (event >= 0) setDisplay('enter values and press "set"');
    }
    const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let event = +e.currentTarget.value
        setMinValue(event)
        localStorage.setItem('minValue', JSON.stringify(event))
        if (event < 0) setDisplay('Incorrect value!');
        if (event >= 0) setDisplay('enter values and press "set"');
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
        setMaxValue(maxValue+1)
        localStorage.setItem('maxValue', JSON.stringify(maxValue+1))
        let newMaxValue = localStorage.getItem('maxValue')
        let newMinValue = localStorage.getItem('minValue')
        if (newMaxValue && newMinValue) {
            let newMxValue = JSON.parse(newMaxValue)
            let newMnValue = JSON.parse(newMinValue)
            if (newMxValue >= 0) {
                setDisplay('enter values and press "set"')
            }
            if (newMxValue <= newMnValue) {
                setDisplay('Incorrect value!')
            }
            if (newMxValue < 0) {
                setDisplay('Incorrect value!')
            }
        }
    }
    const onDownArrowMaxClick = () => {
        setMaxValue(maxValue-1)
        localStorage.setItem('maxValue', JSON.stringify(maxValue-1))
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
        }
    }
    const onUpArrowMinClick = () => {
        setMinValue(minValue+1)
        localStorage.setItem('minValue', JSON.stringify(minValue+1))
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

        }
    }
    const onDownArrowMinClick = () => {
        setMinValue(minValue-1)
        localStorage.setItem('minValue', JSON.stringify(minValue-1))
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
        maxValueColorClass = 'rgba(25,118,210,0.72)'
        minBackColor = 'rgba(210,0,31,0.72)'
        display = 'Incorrect value!'
        counterDisplay = `${s.counterDisplay} ${s.error} ${s.colorRed}`
        minValueColorClass = 'white'
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
            <div className={s.setContainer}>
                <div className={s.setDisplay}>
                    <div className={s.maxContainer}>
                        <span>max value:</span>
                        <TextField variant={'outlined'}
                                   sx={{height: '30px', width: '40%'}}
                                   size="small"
                                   inputProps={{min: 0, style: { textAlign: 'center', color: maxValueColorClass, fontWeight: 'bold', background: maxBackColor}}}
                                   value={maxValue}
                                   onChange={onMaxValueChange}
                                   type="number"
                        ></TextField>
                        <div className={s.arrows}>
                            <IconButton color={'primary'}
                                        sx={{height: '30px', width: '30px'}}
                                        onClick={onUpArrowMaxClick}
                            ><ExpandLessRoundedIcon/></IconButton>
                            <IconButton color={'primary'}
                                        sx={{height: '30px', width: '30px'}}
                                        onClick={onDownArrowMaxClick}
                            ><KeyboardArrowDownRoundedIcon/></IconButton>
                        </div>
                    </div>
                    <div className={s.minContainer}>
                        <span>min value:</span>
                        <TextField variant={'outlined'}
                                   sx={{height: '30px', width: '40%'}}
                                   size="small"
                                   inputProps={{min: 0, style: { textAlign: 'center', color: minValueColorClass, fontWeight: 'bold', background: minBackColor}}}
                                   value={minValue}
                                   onChange={onMinValueChange}
                                   type="number"
                        ></TextField>
                        <div className={s.arrows}>
                            <IconButton color={'primary'}
                                        sx={{height: '30px', width: '30px'}}
                                        onClick={onUpArrowMinClick}
                            ><ExpandLessRoundedIcon/></IconButton>
                            <IconButton color={'primary'}
                                        onClick={onDownArrowMinClick}
                                        sx={{height: '30px', width: '30px'}}
                            ><KeyboardArrowDownRoundedIcon/></IconButton>
                        </div>
                    </div>
                </div>
                <div className={s.setBtns}>
                    <IconButton onClick={onSetClick}
                                color={'primary'}
                                sx={{width: '60px', height: '60px', boxShadow: '2px 2px 10px 0 rgba(0, 0, 0, 0.5)'}}
                                disabled={disabledSet}
                    ><KeyboardDoubleArrowRightRoundedIcon/></IconButton>
                </div>
            </div>
            <div className={s.counterContainer}>
                <div className={counterDisplay}>
                    {display === 'enter values and press "set"' ? 'enter values and press "set"' : display === 'Incorrect value!' ? 'Incorrect value!' : counter}
                </div>
                <div className={s.counterBtns}>
                    <IconButton onClick={onAddCounterClick}
                                color={'primary'}
                                sx={{width: '60px', height: '60px', boxShadow: '2px 2px 10px 0 rgba(0, 0, 0, 0.5)'}}
                                disabled={disabledAdd}
                    ><AddIcon/></IconButton>
                    <IconButton onClick={onResetCounterClick}
                                disabled={disabledReset}
                                color={'primary'}
                                sx={{width: '60px', height: '60px', boxShadow: '2px 2px 10px 0 rgba(0, 0, 0, 0.5)'}}
                    ><RestartAltRoundedIcon/></IconButton>
                </div>
            </div>
        </div>
    );
}

export default App;
