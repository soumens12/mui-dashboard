import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



export default function Sidenav({ open, handleDrawerToggle, toggleDrawer }) {
    const theme = useTheme();
    // const [open, setOpen] = React.useState(true);

    // const handleDrawerToggle = () => {
    //     setOpen(!open);
    // };

    const navigate = useNavigate();

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const handleNav = (path) => {
        navigate(path);
        if (isMobile) {
            handleDrawerToggle(false); // close drawer on mobile
        }
    };



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={open}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true, // Improve performance on mobile
                }}
                sx={{
                    width: open ? drawerWidth : 56,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    boxSizing: "border-box",
                    "& .MuiDrawer-paper": {
                        width: open ? drawerWidth : 56,
                        overflowX: "hidden",
                        transition: (theme) =>
                            theme.transitions.create("width", {
                                easing: theme.transitions.easing.sharp,
                                duration: theme.transitions.duration.enteringScreen,
                            }),
                    },
                }}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerToggle}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { handleNav("/") }} >
                        <ListItemButton
                            selected={isActive("/")}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                    '&.Mui-selected': {
                                        backgroundColor: '#6200ee', // Active background color
                                        color: '#ffffff',             // Active text color
                                    },
                                    '&.Mui-selected:hover': {
                                        backgroundColor: '#6200ee', // Slightly darker on hover
                                    },
                                },
                                open
                                    ? { justifyContent: 'initial' }
                                    : { justifyContent: 'center' },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >
                                <HomeOutlinedIcon className='dark-icon' />
                            </ListItemIcon>
                            <ListItemText
                                primary="Home"
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { handleNav("/about") }}>
                        <ListItemButton selected={isActive("/about")}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                    '&.Mui-selected': {
                                        backgroundColor: '#6200ee', // Active background color
                                        color: '#ffffff',             // Active text color
                                    },
                                    '&.Mui-selected:hover': {
                                        backgroundColor: '#6200ee', // Slightly darker on hover
                                    },
                                },
                                open
                                    ? { justifyContent: 'initial' }
                                    : { justifyContent: 'center' },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >
                                <InfoOutlinedIcon className='dark-icon' />
                            </ListItemIcon>
                            <ListItemText
                                primary="About"
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { handleNav("/settings") }}>
                        <ListItemButton
                            selected={isActive("/settings")}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                    '&.Mui-selected': {
                                        backgroundColor: '#6200ee', // Active background color
                                        color: '#ffffff',             // Active text color
                                    },
                                    '&.Mui-selected:hover': {
                                        backgroundColor: '#6200ee', // Slightly darker on hover
                                    },
                                },
                                open
                                    ? { justifyContent: 'initial' }
                                    : { justifyContent: 'center' },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >
                                <SettingsOutlinedIcon className='dark-icon' />
                            </ListItemIcon>
                            <ListItemText
                                primary="Settings"
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { handleNav("/shorts") }}>
                        <ListItemButton
                            selected={isActive("/shorts")}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                    '&.Mui-selected': {
                                        backgroundColor: '#6200ee', // Active background color
                                        color: '#ffffff',             // Active text color
                                    },
                                    '&.Mui-selected:hover': {
                                        backgroundColor: '#6200ee', // Slightly darker on hover
                                    },
                                },
                                open
                                    ? { justifyContent: 'initial' }
                                    : { justifyContent: 'center' },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >
                                <AdUnitsIcon className='dark-icon' />
                            </ListItemIcon>
                            <ListItemText
                                primary="Shorts"
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                <DrawerHeader />
            </Box>
        </Box >
    );
}
