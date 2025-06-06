import React, { useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

export default function Layout({ children }) {
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {
        setOpen(prev => !prev);
    };


    return (
        <>
            <Navbar toggleDrawer={toggleDrawer} />
            <Box sx={{ display: "flex" }}>

                <Sidenav open={open} toggleDrawer={toggleDrawer} />
                <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                    {children}
                </Box>
            </Box>

        </>
    );
}