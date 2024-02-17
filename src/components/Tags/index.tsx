import React from "react"
import * as S from './styles'
import { IconButton } from "@mui/material"
import { User } from '@styled-icons/boxicons-regular/User'
import { Bell } from '@styled-icons/fa-regular/Bell'

interface Tag {
    id: number
    name: string
}

interface TagsProps {
    className?: string
    tags: Tag[]
}

const Tags: React.FC<TagsProps> = ({ className, tags }) => {

    return (
        <S.TagsContainer className={className}>
            <div className="wrapper">
                {tags.map(item => (
                    <S.TagItem>
                        <p key={item.id}>{item.name}</p>
                    </S.TagItem>
                ))}
            </div>
        </S.TagsContainer>
    )

}

export default Tags