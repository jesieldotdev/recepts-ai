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

    const { recipes, categories } = useAppContext()

    const [selectedCategory, setSelectedCategory] = React.useState<number>(0)
console.log(categories)

    return (
        <S.HomeContainer>
            <AppBar className='pd-16 mt-16' />
            <Greetings className='pd-16 mt-8' />
            <SearchBar className='pd-16 mt-16' />
            <ScrollHorizontal
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                className='mt-16 ml-16 mr-16' />
            {/* <IconButton className='search_button'>
                <MagnifyingGlass color='#fefefe' size={20} />
            </IconButton> */}

            {/* <CookingSVG className='cooking_svg' /> */}
            {/* <Image src={WomenCooking} className='top_img' alt='women' /> */}
            {/* <ThreeColumnTabs recepts={recipes} categories={categories} /> */}
            <GridView
                className='mt-16 pd-16'
                categories={categories}
                category={categories.find(item => item.id === selectedCategory)}
                recepts={recipes} />
            <SimpleBottomNavigation className='bottom_nav' />
        </S.HomeContainer>

    )
}

export default HomeScreen