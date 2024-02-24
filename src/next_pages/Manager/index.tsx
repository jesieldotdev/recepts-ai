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

const ManagerPage = () => {
  const { theme } = useAppContext();
  return (
    <>
      <AppBar theme={theme} className="pd-16 mt-16" />
      <S.GridContainer className="pd-16 mt-16">
        <S.Item>
          <AddSquare size={64} />
          Adicionar
        </S.Item>
        <S.Item>
          <NotepadEdit size={64} />
          Editar
        </S.Item>
      </S.GridContainer>
    </>
  );
};

export default ManagerPage;
