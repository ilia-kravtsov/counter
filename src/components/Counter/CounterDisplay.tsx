import React from 'react';

type CounterDisplayType = {
    display: number | string
    counterDisplay: string
    counter: number
}

export const CounterDisplay: React.FC<CounterDisplayType> = ({
                                                                 display,
                                                                 counterDisplay,
                                                                 counter,
                                                                 ...props
}) => {
    return (
        <div className={counterDisplay}>
            {display === 'enter values and press "set"'
                ? 'enter values and press "set"'
                : display === 'Incorrect value!'
                    ? 'Incorrect value!'
                    : counter}
        </div>
    );
};

