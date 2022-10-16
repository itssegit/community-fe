import * as React from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Layout = () => {
    //
    const navigate = useNavigate();
    const navItems = ['Home', 'About', 'Profile'];
    
    const movePage = (item) => {
        const selectedMenu = item.target.value;
        switch (selectedMenu) {
            case 'Home':
                navigate('/');
                break;
            case 'About':
                navigate('/about');
                break;
            case 'Profile':
                navigate('/profiles/giorgio');
                break;
            default:
                console.log(`Sorry, we are out of Page.`);
        }
    }

    return (
        <div>
            <AppBar component="nav">
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    ITSSE
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }} value={item} onClick={movePage}>
                        {item}
                    </Button>
                    ))}
                </Box>
                </Toolbar>
            </AppBar>
            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default Layout;
