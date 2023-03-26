import React, {ChangeEvent, FC} from 'react';
import s from "../../App.module.css";
import {SettingsMaxContainer} from "./SettingsMaxContainer";
import {SettingsMinContainer} from "./SettingsMinContainer";

type SettingsDisplay = {
    onMaxValueChange: (e: ChangeEvent<HTMLInputElement>) => void
    onMinValueChange: (e: ChangeEvent<HTMLInputElement>) => void
    onDownArrowMaxClick: () => void
    onDownArrowMinClick: () => void
    onUpArrowMaxClick: () => void
    onUpArrowMinClick: () => void
    maxValueColorClass: string
    minValueColorClass: string
    maxBackColor: string
    minBackColor: string
    maxValue: number
    minValue: number
}

export const SettingsDisplay: FC<SettingsDisplay> = ({
    onMaxValueChange,
    onMinValueChange,
    onDownArrowMaxClick,
    onDownArrowMinClick,
    onUpArrowMaxClick,
    onUpArrowMinClick,
    maxValueColorClass,
    minValueColorClass,
    maxBackColor,
    minBackColor,
    maxValue,
    minValue,

}) => {
    return (
        <div className={s.setDisplay}>
            <SettingsMaxContainer onMaxValueChange={onMaxValueChange}
                                  onMinValueChange={onMinValueChange}
                                  onDownArrowMaxClick={onDownArrowMaxClick}
                                  onDownArrowMinClick={onDownArrowMinClick}
                                  onUpArrowMaxClick={onUpArrowMaxClick}
                                  onUpArrowMinClick={onUpArrowMinClick}
                                  maxValueColorClass={maxValueColorClass}
                                  minValueColorClass={minValueColorClass}
                                  maxBackColor={maxBackColor}
                                  minBackColor={minBackColor}
                                  maxValue={maxValue}
                                  minValue={minValue}
            />
            <SettingsMinContainer onMinValueChange={onMinValueChange}
                                  onDownArrowMinClick={onDownArrowMinClick}
                                  onUpArrowMinClick={onUpArrowMinClick}
                                  minValueColorClass={minValueColorClass}
                                  minBackColor={minBackColor}
                                  minValue={minValue}
            />
        </div>
    );
};

