import React from 'react';
import './App.css';
import styled, {css} from "styled-components";
import MainImage from "./img/main_1.png";
import SecondaryImage from "./img/secondary_1.png"
import {theme} from "./styles/Theme.styled";
import {MyAnimation} from "./styles/animations/Animations";

function App() {
    return (
        <div className="App">
            <Box>
                <Card cardType={"primary"}>
                    <MainImg src={MainImage} alt="Main image"/>
                    <BottomSection>
                        <MainHeader>Headline</MainHeader>
                        <MainText>Faucibus. Faucibus. Sit sit sapien sit<br />tempusrisu ut. Sit molestie ornare in venen.</MainText>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.primary}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.primary} background={"transparent"}>Save</StyledBtn>
                    </BottomSection>
                </Card>
                <Card cardType={"secondary"}>
                    <MainImg src={SecondaryImage} alt="Main image"/>
                    <BottomSection>
                        <MainHeader>Прекрасный отдых в горах</MainHeader>
                        <MainText>Почувствуй атмосферу праздника</MainText>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.secondary}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.secondary} background={"transparent"}>Save</StyledBtn>
                    </BottomSection>
                </Card>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fff;
`

const Card = styled.div<CardPropsType>`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
`

const MainImg = styled.img`
  display: block;
  border-radius: 10px;
  width: 280px;
  height: 170px;
  margin: 10px;
`

const MainHeader = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #000;
`

const BottomSection = styled.section`
  margin: 10px 20px 0 20px;
  //background-color: #b0afaf;
  text-align: left;
  button + button {
    margin-left: 10px;
  }
`

const MainText = styled.p`
  height: 40px;
  margin: 20px 0;
  font-size: 12px;
  font-weight: 500;
  color: #abb3ba;
`
const StyledBtn = styled.button<StyledBtnPropsType>`
  cursor: pointer;
  height: 30px;
  width: 86px;
  border: 1px solid ${theme.colors.primary}; /*Будет пропс или пропс-переменная*/
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  line-height: 2;
  color: ${props => props.color || "grey"}; /*Будет пропс или пропс-переменная*/

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    color: ${props => props.color || "grey"};
    background-color: ${props => props.background || "grey"};
    border: 1px solid  ${props => props.color || "grey"};
    
    &:hover {
      transform: scale(1.1);
      transition: all .4s ease;
    }
  `}


  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    color: ${props => props.color || "grey"};
    background-color: ${props => props.background || "grey"};
    border: 1px solid  ${props => props.background || "grey"};

    &:hover {
      animation: ${MyAnimation} .3s ease;
    }
  `}

`

type StyledBtnPropsType = {
    color?: string
    btnType: "primary" | "outlined"
    background?: string
    active?: boolean
}

type CardPropsType = {
    cardType: "primary" | "secondary"
}