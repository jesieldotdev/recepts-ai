import React from "react"
import * as S from './styles'
import { IconButton } from "@mui/material"
import { User } from '@styled-icons/boxicons-solid/User'
import { Bell } from '@styled-icons/fa-regular/Bell'
import { Fire, Heart } from "styled-icons/heroicons-outline"
import { Drink, Hot, Pizza } from "styled-icons/boxicons-solid"
import { IceCream, PepperHot } from "styled-icons/fa-solid"
import { HotTub } from "styled-icons/material"
import { HealthAndSafety } from "@styled-icons/material-sharp/HealthAndSafety"

interface ScrollHorizontalProps {
  className?: string
  selectedCategory: number
  setSelectedCategory: (n:number)=>void
}

const ScrollHorizontal: React.FC<ScrollHorizontalProps> = ({ className, setSelectedCategory, selectedCategory }) => {
  const items = [
    {
      id: 1,
      title: "Tendências",
      icon: <Hot color="#383838" size={24} />,
    },
    {
      id: 2,
      title: "Lanches",
      icon: <Pizza color="#383838" size={24} />,
    },
    {
      id: 3,
      title: "Bebidas",
      icon: <Drink color="#383838" size={24} />,
    },
    {
      id: 4,
      title: "Legumes",
      icon: <PepperHot color="#383838" size={24} />,
    },
    {
      id: 5,
      title: "Doces",
      icon: <IceCream color="#383838" size={24} />,
    },
    {
      id: 6,
      title: "Saudável",
      icon: <HealthAndSafety color="#383838" size={24} />,
    },
    {
      id: 7,
      title: "Internacional",
      icon: <User color="#383838" size={24} />,
    },
    {
      id: 8,
      title: "Diversos",
      icon: <HotTub color="#383838" size={24} />,
    },
  ];
  

  return (
    <S.ScrollHorizontalContainer className={className}>
      <div className="wrapper">
        {items.map((item) => (
          <div key={item.id} className="item">
            <IconButton 
            onClick={(e)=> {
              e.preventDefault()
              e.stopPropagation()
              setSelectedCategory(item.id)
            }}
            className={item.id === selectedCategory ? "icon_btn on" : "icon_btn"}>{item.icon}</IconButton>
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
    </S.ScrollHorizontalContainer>
  );
}

export default ScrollHorizontal