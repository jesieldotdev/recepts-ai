import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Favorite, LocationOn, Restore } from 'styled-icons/material';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import { HomeOutline } from '@styled-icons/evaicons-outline/HomeOutline';
import { Home } from '@styled-icons/fluentui-system-filled/Home';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { PersonCircle as PersonCircleV2 } from '@styled-icons/fluentui-system-filled/PersonCircle';

interface BottomNavigationProps {
    className?: string
}

const navItemStyles = {
    fontFamily: 'Poppins'
} 

export default function SimpleBottomNavigation({ className }: BottomNavigationProps) {
    const [value, setValue] = React.useState(0);

    return (
        // <Box sx={{ 
        //     borderRadius: '50%'
        //  }}>
        <BottomNavigation
            className={className}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction
                classes={{ label: 'custom_label' }}
                label="Receitas"
                disableRipple
                icon={value === 0 ? <Home color='#906151' size={28} /> : <HomeOutline color='#906151' size={28} />} />
            <BottomNavigationAction
                classes={{ label: 'custom_label' }}
                label="Favoritos"
                disableRipple
                icon={value === 1 ? <Favorite color='#906151' size={28} /> : <FavoriteBorder color='#906151' size={28} />} />
            <BottomNavigationAction
                classes={{ label: 'custom_label' }}
                label="Perfil"
                disableRipple
                icon={value === 2 ? <PersonCircleV2 color='#906151' size={28} /> : <PersonCircle color='#906151' size={28} />} />
        </BottomNavigation>
        // </Box>
    );
}