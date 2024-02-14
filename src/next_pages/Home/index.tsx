import { IconButton } from '@mui/material'
import React, { lazy, Suspense } from 'react';
import * as S from './styles'
import { MagnifyingGlass } from '@styled-icons/fa-solid/MagnifyingGlass'
import CookingSVG from '@/assets/SvgsComponents/cooking'
import SimpleBottomNavigation from '@/components/BottomNavigation'
import ThreeColumnTabs from '@/components/Tabs'
import { Recept, TabProps } from '@/models/General'
import GridView from '@/components/GridView'
import WomenCooking from '../../assets/images/women_cooking.jpeg'
import Image from 'next/image';



const HomeScreen = () => {

    const recepts: Recept[] = [
        {
            id: 1,
            name: 'Arroz',
        },
        {
            id: 2,
            name: 'Feijão',
        },
        {
            id: 3,
            name: 'Macarrao',
        },
        {
            id: 4,
            name: 'Torta',
        },
        {
            id: 5,
            name: 'Bolo',
        },
        {
            id: 6,
            name: 'Chá',
        },
    ]


    const tabs: TabProps[] = [
        {
            id: 0,
            name: 'Pratos',
            content: <GridView className='mt-16' recepts={recepts} />
        },
        {
            id: 1,
            name: 'Bebidas',
            content: <>2</>

        },
        {
            id: 2,
            name: 'Pratos',
            content: <>3</>

        },
    ]


    return (
        <S.HomeContainer>
            <IconButton className='search_button'>
                <MagnifyingGlass color='#fefefe' size={16} />
            </IconButton>

            {/* <CookingSVG className='cooking_svg' /> */}
            <Image src={WomenCooking} className='top_img' alt='women' />
            <ThreeColumnTabs tabs={tabs || []} />

            <SimpleBottomNavigation className='bottom_nav' />
        </S.HomeContainer>

    )
}

export default HomeScreen