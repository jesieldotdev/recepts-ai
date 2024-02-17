import React from "react"
import * as S from './styles'
import { IconButton } from "@mui/material"
import { User } from '@styled-icons/boxicons-regular/User'
import { Bell } from '@styled-icons/fa-regular/Bell'

interface AppBarProps {
    className?: string
}

const AppBar: React.FC<AppBarProps> = ({ className }) => {

    return (
        <S.AppBarContainer className={className}>
            <div className="flex_container">
                <IconButton className="icon_btn">
                    <User size={24} color="#282828" />
                </IconButton>
                <IconButton className="icon_btn">
                    <Bell size={24} color="#282828" />
                </IconButton>
            </div>
            <p className="greeting_message ml-16 mt-8">Olá, Cozinheiro!</p>
        </S.AppBarContainer>
    )

}

export default AppBar