import * as React from 'react';
import Box from '@mui/material/Box';
import * as S from './styles'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Favorite, LocationOn, Restore } from 'styled-icons/material';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import { HomeOutline } from '@styled-icons/evaicons-outline/HomeOutline';
import { Home } from '@styled-icons/fluentui-system-filled/Home';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { PersonCircle as PersonCircleV2 } from '@styled-icons/fluentui-system-filled/PersonCircle';
import { IconButton } from '@mui/material';

interface BottomNavigationProps {
    className?: string
}

interface NavItem {
    value: number
    title: string
    icon: React.JSX.Element
    icon_on: React.JSX.Element
}

const navItemStyles = {
    fontFamily: 'Poppins'
}

export default function SimpleBottomNavigation({ className }: BottomNavigationProps) {
    const [value, setValue] = React.useState(0);

    const items: NavItem[] = [
        {
            value: 0,
            title: 'Receitas',
            icon: <HomeOutline className='icon' />,
            icon_on: <Home className='icon on' />,
        },
        {
            value: 1,
            title: 'Favoritos',
            icon: <FavoriteBorder className='icon' />,
            icon_on: <Favorite className='icon on' />,
        },
        {
            value: 2,
            title: 'Perfil',
            icon: <PersonCircle className='icon' />,
            icon_on: <PersonCircleV2 className='icon on' />,
        },
    ]

    return (
        <S.BottomNavContainer
            className={className}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >

            {
                items.map(item => <BottomNavigationAction
                    key={item.value}
                    classes={{ label: 'custom_label', selected: 'on', root: 'root' }}
                    label={item.title}
                    disableRipple
                    icon={value === item.value ? <div className='item'>{item.icon_on}</div> : <div>{item.icon}</div>} />
                )}

        </S.BottomNavContainer>
        // </Box>
    );
}