import React from 'react';
import s from "../../App.module.css";
import AddIcon from "@mui/icons-material/Add";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import {MultiButton} from "../MultiButton";

type CounterButtonsType = {
    onResetCounterClick: () => void
    onAddCounterClick: () => void
    disabledReset: boolean
    disabledAdd: boolean
}

export const CounterButtons: React.FC<CounterButtonsType> = ({
                                                                 onResetCounterClick,
                                                                 onAddCounterClick,
                                                                 disabledReset,
                                                                 disabledAdd,
                                                                 ...props
                                                             }) => {
    return (
        <div className={s.counterBtns}>
            <MultiButton buttonIcon={<AddIcon/>}
                         disabled={disabledAdd}
                         callback={onAddCounterClick}
            />
            <MultiButton buttonIcon={<RestartAltRoundedIcon/>}
                         disabled={disabledReset}
                         callback={onResetCounterClick}
            />
        </div>
    );
};

