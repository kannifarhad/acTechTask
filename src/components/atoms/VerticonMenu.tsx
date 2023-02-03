import React, { useState } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Box  } from "@mui/material"
import { MoreVert }  from '@mui/icons-material';

export type VerticonMenuItemType = {
    name: string,
    icon: JSX.Element,
    onClick: ()=> void
}
type VerticonMenuProps = {
    menuItems:VerticonMenuItemType[]
}

export const VerticonMenu = ({ menuItems }:VerticonMenuProps)=>{
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <Box className="verticonMenu">
            <IconButton 
                className="vmenuButton"
                aria-label="menu" 
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                    <MoreVert />
            </IconButton>
            <Menu
                id="basic-menu"
                className="vmenuList"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                 'aria-labelledby': 'basic-button',
                }}
            >
                {menuItems.map(item=>
                    <MenuItem onClick={handleClose} key={item.name}> 
                        <ListItemIcon className="vmenuIcon">
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText className="vmenuName">{item.name}</ListItemText>
                    </MenuItem>
                )}
            
            </Menu>
        </Box>
    )
}

export default VerticonMenu;