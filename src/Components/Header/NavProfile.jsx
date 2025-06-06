import { Settings } from '@mui/icons-material';
import { ExitToApp } from '@mui/icons-material';
import { Avatar, Box, Button, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
const NavProfile = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const headerDropData = [
        { label: "settings", icon: <Settings /> },
        { label: "Logout", icon: <ExitToApp /> },
    ]
    return (
        <Box>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar alt="Remy Sharp" src="/img/avatar/1.jpg" />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                {headerDropData.map((item, i) => (
                    <MenuItem key={i} component="MenuItem" onClick={handleClose}>
                        <ListItemIcon className='dark-icon'>
                            {item.icon}
                        </ListItemIcon>
                        <Typography variant="inherit">
                            {item.label}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default NavProfile
