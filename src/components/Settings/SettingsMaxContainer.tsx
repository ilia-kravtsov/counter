import React, {ChangeEvent, FC} from 'react';
import s from "../../App.module.css";
import {IconButton, TextField} from "@mui/material";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

type SettingsMaxContainerType = {
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

export const SettingsMaxContainer: FC<SettingsMaxContainerType> = ({
   onMaxValueChange,
   onDownArrowMaxClick,
   onUpArrowMaxClick,
   maxValueColorClass,
   maxBackColor,
   maxValue,
    ...props
}) => {
    return (
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
    );
};

