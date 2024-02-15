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
import { useAppContext } from '@/context/AppContext';



const HomeScreen = () => {

    const {recipes} = useAppContext()

    const tabs: TabProps[] = [
        {
            id: 0,
            name: 'Pratos',
            content: <GridView className='mt-16' recepts={recipes} />
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