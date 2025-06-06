
import { Avatar, Badge, Box, IconButton, ListItem, ListItemAvatar, ListItemText, Menu, Typography } from '@mui/material';
import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavNotification = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const headerNotificationData = [
        { name: "Virat Kohli", desc: "Lorem ipsum dummy text" },
        { name: "Rohit Sharma", desc: "Lorem ipsum dummy text" },
        { name: "MS Dhoni", desc: "Lorem ipsum dummy text" },
    ]
    const avatarColors = ['#1976d2', '#f50057', '#4caf50', '#ff9800', '#9c27b0'];
    return (
        <Box>
            <IconButton
                id="notification-button"
                aria-controls={open ? 'notification-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Badge badgeContent={4} color='primary' slotProps={{
                    badge: {
                        sx: {
                            backgroundColor: '#ff0000', // red background
                            color: 'white',             // white text
                        },
                    },
                }}>
                    <NotificationsIcon />
                </Badge>

            </IconButton>
            <Menu
                id="notification-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'notification-button',
                    },
                }}
            >
                {headerNotificationData.map((item, i) => (
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={item.name} sx={{ bgcolor: avatarColors[i % avatarColors.length], color: 'white' }} src={item.name[0].toLocaleUpperCase()} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"

                                        sx={{ color: "text.secondary", display: 'inline' }}
                                    >
                                        {item.desc}
                                    </Typography>

                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}
            </Menu>
        </Box>
    )
}

export default NavNotification
