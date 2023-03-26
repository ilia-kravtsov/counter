import React, {ChangeEvent} from 'react';
import s from "../../App.module.css";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import {SettingsDisplay} from "./SettingsDisplay";
import {MultiButton} from "../MultiButton";

type SettingsType = {
    onMaxValueChange: (e: ChangeEvent<HTMLInputElement>) => void
    onMinValueChange: (e: ChangeEvent<HTMLInputElement>) => void
    onDownArrowMaxClick: () => void
    onDownArrowMinClick: () => void
    onUpArrowMaxClick: () => void
    onUpArrowMinClick: () => void
    maxValueColorClass: string
    minValueColorClass: string
    onSetClick: () => void
    maxBackColor: string
    minBackColor: string
    disabledSet: boolean
    maxValue: number
    minValue: number
}

export const Settings: React.FC<SettingsType> = ({
                                                     maxValueColorClass,
                                                     maxBackColor,
                                                     maxValue,
                                                     onMaxValueChange,
                                                     onUpArrowMaxClick,
                                                     onDownArrowMaxClick,
                                                     minValueColorClass,
                                                     minBackColor,
                                                     minValue,
                                                     onMinValueChange,
                                                     onUpArrowMinClick,
                                                     onDownArrowMinClick,
                                                     onSetClick,
                                                     disabledSet,
                                                     ...props
                                                 }) => {
    return (
        <div className={s.setContainer}>
            <SettingsDisplay onUpArrowMinClick={onUpArrowMinClick}
                             onUpArrowMaxClick={onUpArrowMaxClick}
                             onMinValueChange={onMinValueChange}
                             minValueColorClass={minValueColorClass}
                             onMaxValueChange={onMaxValueChange}
                             minValue={minValue}
                             minBackColor={minBackColor}
                             maxValue={maxValue}
                             maxBackColor={maxBackColor}
                             maxValueColorClass={maxValueColorClass}
                             onDownArrowMinClick={onDownArrowMinClick}
                             onDownArrowMaxClick={onDownArrowMaxClick}
            />
            <div className={s.setBtns}>
                <MultiButton callback={onSetClick}
                             disabled={disabledSet}
                             buttonIcon={<KeyboardDoubleArrowRightRoundedIcon/>}
                />
            </div>
        </div>
    );
};

