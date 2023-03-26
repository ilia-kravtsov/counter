import React, {ChangeEvent, FC} from 'react';
import s from "../../App.module.css";
import {IconButton, TextField} from "@mui/material";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

type SettingsMinContainerType = {
    onMinValueChange: (e: ChangeEvent<HTMLInputElement>) => void
    onDownArrowMinClick: () => void
    onUpArrowMinClick: () => void
    minValueColorClass: string
    minBackColor: string
    minValue: number
}

export const SettingsMinContainer: FC<SettingsMinContainerType> = ({
    onMinValueChange,
    onDownArrowMinClick,
    onUpArrowMinClick,
    minValueColorClass,
    minBackColor,
    minValue,
}) => {
    return (
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
    );
};

