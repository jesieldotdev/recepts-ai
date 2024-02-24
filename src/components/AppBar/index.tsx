import React from "react"
import * as S from './styles'
import { IconButton } from "@mui/material"
import { User } from '@styled-icons/boxicons-regular/User'
import { Bell } from '@styled-icons/fa-regular/Bell'
import { ThemeType } from '@/context/AppContext'

interface AppBarProps {
    className?: string
    theme: ThemeType
}

const AppBar: React.FC<AppBarProps> = ({ className, theme }) => {
    return (
        <S.AppBarContainer theme={theme} className={className}>
            <div className="flex_container">
                <IconButton className="icon_btn">
                    <User className="icon" />
                </IconButton>
                <IconButton className="icon_btn">
                    <Bell className="icon" />
                </IconButton>
            </div>
            <p className="greeting_message mt-8">Olá, Cozinheiro!</p>
        </S.AppBarContainer>
    )

}

export default AppBar