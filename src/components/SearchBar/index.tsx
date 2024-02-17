import React from "react"
import * as S from './styles'
import { IconButton } from "@mui/material"
import { User } from '@styled-icons/boxicons-regular/User'
import { Search } from '@styled-icons/evil/Search'
import { Sliders2Vertical } from '@styled-icons/bootstrap/Sliders2Vertical'

interface SearchBarProps {
    className?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {

    return (
        <S.SearchBarContainer className={className}>
            <div className="search">
                <IconButton className="magnify">
                    <Search size={24} />
                </IconButton>
                <input placeholder="Buscar receitas" />
                <IconButton className="controls" >
                    <Sliders2Vertical size={20} />
                </IconButton>

            </div>
        </S.SearchBarContainer>
    )

}

export default SearchBar