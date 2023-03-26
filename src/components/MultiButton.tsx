import React, {FC} from 'react';
import {IconButton} from "@mui/material";
import { SvgIconComponent } from "@material-ui/icons";

type ButtonType = {
    callback : () => void
    disabled: boolean
    buttonIcon: SvgIconComponent
}

export const MultiButton: FC<ButtonType> = ({
                                           callback,
                                           disabled,
                                           buttonIcon,
                                           ...props}) => {
    console.log(typeof buttonIcon)
    return (
        <IconButton onClick={callback}
                    color={'primary'}
                    sx={{width: '60px', height: '60px', boxShadow: '2px 2px 10px 0 rgba(0, 0, 0, 0.3)'}}
                    disabled={disabled}
        >
            {buttonIcon}
        </IconButton>
    );
};

