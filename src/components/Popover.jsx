import React, { useState } from 'react';
import { Popover } from '@mui/material';
import { List, ListItem, ListItemText, Box, Typography, Button } from '@mui/material';

const PopoverComponent = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const togglePopover = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setOpen(open);
        setAnchorEl(event.currentTarget);
    };

    const buttonStyle = {
        width: 'auto',
        height: 'auto',
        border: 'none',
        cursor: 'pointer',
        float: 'right',
        padding: '10px',
        backgroundColor: 'white'
    }

    const toggleButton = {
        width: 'fit-content',
        height: 'fit-content',
        border: 'none',
        cursor: 'ponter',
        marginRight: '20px',
        backgroundColor: 'transparent'
    }

    const linkStyle = {
        textDecoration: 'none',
        fontFamily: 'Barlow',
        color: 'hsl(232, 10%, 55%)'
    }

    const contactStyle = {
        height: '35px',
        width: '100px',
        backgroundColor: 'hsl(51, 100%, 49%)',
        borderRadius: '30px',
        fontFamily: 'Fraunces',
        border: 'none',
        cursor: 'pointer',
    }

    return (
        <div id='Popover'>
            <button onClick={togglePopover(true)} id="icon-menu" style={toggleButton}><img src="images/icon-hamburger.svg" alt="icon-menu"></img></button>
            <Popover
            id='popover-window'
            anchorEl={anchorEl}
            open={open}
            onClose={togglePopover(false)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            slotProps={{
                paper: {
                    style: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        borderRadius: 0
                    }
                }
            }}
            >
                <Box
                sx={{
                    width: '250px',
                    height: '300px',
                    position: "relative",
                    paddingTop: "20px",
                    paddingRight: "10px",
                    mt: "10px",
                    "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    width: 0,
                    height: 0,
                    borderTop: "30px solid transparent",
                    borderRight: "30px solid white",
                    top: 1,
                    left: "75% "
                    }
                }}
                role="presentation"
                >
                    <List sx={{width: '90%', backgroundColor: 'white'}}>
                        <ListItem>
                            <ListItemText><a href='#' style={linkStyle}>About</a></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><a href='#' style={linkStyle}>Services</a></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><a href='#' style={linkStyle}>Projects</a></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><button id="contact-button" style={contactStyle}>CONTACT</button></ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Popover>
        </div>
    );
};


export default PopoverComponent;