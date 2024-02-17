import React from "react"
import * as S from './styles'
import { IconButton } from "@mui/material"
import { User } from '@styled-icons/boxicons-regular/User'
import { Bell } from '@styled-icons/fa-regular/Bell'
import { Fire } from "styled-icons/heroicons-outline"
import { Hot, Pizza } from "styled-icons/boxicons-solid"
import { IceCream, PepperHot } from "styled-icons/fa-solid"
import { HotTub } from "styled-icons/material"

interface ScrollHorizontalProps {
    className?: string
}

const ScrollHorizontal: React.FC<ScrollHorizontalProps> = ({ className }) => {
    const items = [
      {
        id: 1,
        title: "Popular",
        icon: <Fire color="#383838" size={24}/>,
      },
      {
        id: 2,
        title: "Lanches",
        icon: <Pizza color="#383838" size={24} />,
      },
      {
        id: 3,
        title: "Bebidas",
        icon: <Hot color="#383838" size={24} />,
      },
      {
        id: 4,
        title: "Food",
        icon: <PepperHot color="#383838" size={24} />,
      },
      {
        id: 5,
        title: "Food",
        icon: <HotTub color="#383838" size={24}/>,
      },
      {
        id: 6,
        title: "Food",
        icon: <IceCream size={24} color="#383838"/>,
      },
      {
        id: 7,
        title: "Food",
        icon: <IceCream size={24} color="#383838"/>,
      },
      {
        id: 8,
        title: "Food",
        icon: <IceCream size={24} color="#383838"/>,
      },
      {
        id: 9,
        title: "Food",
        icon: <IceCream size={24} color="#383838"/>,
      },
      {
        id: 10,
        title: "Food",
        icon: <IceCream size={24} color="#383838"/>,
      },
    ];
  
    return (
      <S.ScrollHorizontalContainer className={className}>
        {items.map((item) => (
          <div key={item.id} className="item">
            <IconButton className="icon_btn">{item.icon}</IconButton>
            <p className="title">{item.title}</p>
          </div>
        ))}
      </S.ScrollHorizontalContainer>
    );
  }

export default ScrollHorizontal