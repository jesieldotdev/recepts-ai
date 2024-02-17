import React, { lazy, Suspense } from 'react';
import * as S from './styles'
import { MagnifyingGlass } from '@styled-icons/fa-solid/MagnifyingGlass'
import CookingSVG from '@/assets/SvgsComponents/cooking'
import SimpleBottomNavigation from '@/components/BottomNavigation'
import ThreeColumnTabs from '@/components/Tabs'
import { Recept, TabProps } from '@/models/General'
import GridView from '@/components/GridView'
import WomenCooking from '../../assets/images/women_cooking.jpg'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import AppBar from '@/components/AppBar';
import Greetings from '@/components/Greetings';
import SearchBar from '@/components/SearchBar';
import ScrollHorizontal from '@/components/ScrollHorizontal';



const HomeScreen = () => {

    const {recipes, categories} = useAppContext()

    const tabs: TabProps[] = [
        {
            id: 0,
            name: 'Pratos',
            content:<>
             
             </>
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
            <AppBar className='pd-16 mt-16' />
            <Greetings className='pd-16 mt-16' />
            <SearchBar className='pd-16 mt-16'/>
            <ScrollHorizontal className='mt-16 ml-16 mr-16'/>
            {/* <IconButton className='search_button'>
                <MagnifyingGlass color='#fefefe' size={20} />
            </IconButton> */}

            {/* <CookingSVG className='cooking_svg' /> */}
            {/* <Image src={WomenCooking} className='top_img' alt='women' /> */}
            <ThreeColumnTabs recepts={recipes} categories={categories} />

            <SimpleBottomNavigation className='bottom_nav' />
        </S.HomeContainer>

    )
}

export default HomeScreen