import React, { lazy, Suspense } from "react";
import * as S from "./styles";
import { MagnifyingGlass } from "@styled-icons/fa-solid/MagnifyingGlass";
import CookingSVG from "@/assets/SvgsComponents/cooking";
import SimpleBottomNavigation from "@/components/BottomNavigation";
import ThreeColumnTabs from "@/components/Tabs";
import { RecipeProps, TabProps } from "@/models/General";
import GridView from "@/components/GridView";
// import WomenCooking from '../../assets/images/women_cooking.jpg'
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import AppBar from "@/components/AppBar";
import Greetings from "@/components/Greetings";
import SearchBar from "@/components/SearchBar";
import ScrollHorizontal from "@/components/ScrollHorizontal";
import { AddSquare } from "@styled-icons/fluentui-system-filled/AddSquare";
import { NotepadEdit } from "@styled-icons/fluentui-system-regular/NotepadEdit";
import ManagerViewController from "./viewController";

const ManagerPage = () => {
  const { theme, toggleTheme } = useAppContext();
  const { manager_menu_items } = ManagerViewController()

  return (
    <S.ManageContainer theme={theme}>
      <button onClick={() => toggleTheme()}>Tema</button>
      <AppBar theme={theme} className="pd-16 pt-16" />
      <S.GridContainer className="pd-16 mt-16">
        {
          manager_menu_items.map(item => <S.Item className="box_shadow" theme={theme} key={item.id}>{item.icon} {item.title}</S.Item>)
        }
      </S.GridContainer>
    </S.ManageContainer>
  );
};

export default ManagerPage;
