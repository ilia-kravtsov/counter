import React, {ChangeEvent, useState} from 'react';
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

    const onAddCounterClick = () => setCounter(counter+1)
    const onResetCounterClick = () => setCounter(minValue)
    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let event = +e.currentTarget.value
        setMaxValue(event)
        if (event < 0) {
            setDisplay('Incorrect value!')
        }
        if (event >= 0) {
            setDisplay('enter values and press "set"')
        }
        localStorage.setItem('maxValue', JSON.stringify(event))
    }
    const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let event = +e.currentTarget.value
        setMinValue(event)
        if (event < 0) {
            setDisplay('Incorrect value!')
        }
        if (event > 0) {
            setDisplay('enter values and press "set"')
        }
        if (event === 0) {
            setDisplay('enter values and press "set"')
        }
        localStorage.setItem('minValue', JSON.stringify(event))
    }
    const onSetClick = () => {
        let newMinValue = localStorage.getItem('minValue')
        if (newMinValue) {
            let newValue = JSON.parse(newMinValue)
            setCounter(newValue)
        }
    }
    const onUpArrowMaxClick = () => {
        setMaxValue(maxValue+1)
        localStorage.setItem('maxValue', JSON.stringify(maxValue+1))
    }
    const onDownArrowMaxClick = () => {
        setMaxValue(maxValue-1)
        localStorage.setItem('maxValue', JSON.stringify(maxValue-1))
    }
    const onUpArrowMinClick = () => {
        setMinValue(minValue+1)
        localStorage.setItem('minValue', JSON.stringify(minValue+1))
    }
    const onDownArrowMinClick = () => {
        setMinValue(minValue-1)
        localStorage.setItem('minValue', JSON.stringify(minValue-1))
    }

    let final_display_counter: number | string = counter
    let disabledReset: boolean = false
    let disabledAdd: boolean = false
    let disabledSet: boolean = false
    let counterDisplay: string = s.counterDisplay

    if (counter <= minValue) disabledReset = true
    if (counter >= maxValue) {
        disabledAdd = true
        counterDisplay = `${s.counterDisplay} ${s.colorRed}`
    }
    if (minValue < 0 || minValue >= maxValue) {
        disabledReset = true
        disabledAdd = true
        disabledSet = true
        final_display_counter = 'Incorrect value!'
        counterDisplay = `${s.counterDisplay} ${s.colorRed} ${s.error}`
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
                                   inputProps={{min: 0, style: { textAlign: 'center', color: 'rgba(25,118,210,0.72)', fontWeight: 'bold'}}}
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
                                   inputProps={{min: 0, style: { textAlign: 'center', color: 'rgba(25,118,210,0.72)', fontWeight: 'bold'}}}
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
                    {final_display_counter}
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
