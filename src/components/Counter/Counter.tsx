import React, {FC} from 'react';
import s from "../../App.module.css";
import {CounterDisplay} from "./CounterDisplay";
import {CounterButtons} from "./CounterButtons";

type CounterType = {
    counter: number
    disabledAdd: boolean
    counterDisplay: string
    disabledReset: boolean
    display: number | string
    onAddCounterClick: () => void
    onResetCounterClick: () => void
}

export const Counter: FC<CounterType> = ({
                                             counterDisplay,
                                             display,
                                             counter,
                                             onAddCounterClick,
                                             disabledAdd,
                                             onResetCounterClick,
                                             disabledReset,
                                             ...props
                                         }) => {
    return (
        <div className={s.counterContainer}>
            <CounterDisplay counterDisplay={counterDisplay}
                            display={display}
                            counter={counter}
            />
            <CounterButtons onResetCounterClick={onResetCounterClick}
                            onAddCounterClick={onAddCounterClick}
                            disabledReset={disabledReset}
                            disabledAdd={disabledAdd}
            />
        </div>
    );
};

