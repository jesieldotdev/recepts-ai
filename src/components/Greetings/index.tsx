import React from "react"
import * as S from './styles'
import { IconButton } from "@mui/material"
import { User } from '@styled-icons/boxicons-regular/User'
import { Bell } from '@styled-icons/fa-regular/Bell'

interface GreetingsProps {
    className?: string
}

const Greetings: React.FC<GreetingsProps> = ({ className }) => {

    return (
        <S.GreetingsContainer className={className}>
            <p className="message_text">Faça você a sua comida, fique em <span className="highlighted_word">casa</span></p>
        </S.GreetingsContainer>
    )

}

export default Greetings