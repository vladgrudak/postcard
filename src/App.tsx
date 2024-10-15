import React from 'react';
import './App.css';
import MainImageSummer from "./img/main_1.png";
import MainImageWinter from "./img/main_2.png"
import MainImageAutumn from "./img/main_3.png"
import MainImageSpring from "./img/main_4.png"
import {theme} from "./styles/Theme.styled";
import {StyledBtn} from "./styles/StyledBtn";
import {Box} from "./styles/Box";
import {Card} from "./styles/Card";
import {MainImg} from "./styles/MainImg";
import {MainTitle} from "./styles/MainTitle";
import {BottomSection} from "./styles/BottomSection";
import {MainText} from "./styles/MainText";
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Box>

                <Card>
                    <MainImg src={MainImageSummer} alt="Main image"/>
                    <BottomSection>
                        <MainTitle>{theme.headers.summerHeader}</MainTitle>
                        <MainText>{theme.mainTexts.summerText}</MainText>
                        <Buttons>
                            <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.summer}>See more</StyledBtn>
                            <StyledBtn btnType={"outlined"} color={theme.colors.summer} background={"transparent"}>Save</StyledBtn>
                        </Buttons>
                    </BottomSection>
                </Card>

                <Card>
                    <MainImg src={MainImageWinter} alt="Main image"/>
                    <BottomSection>
                        <MainTitle>{theme.headers.winterHeader}</MainTitle>
                        <MainText>{theme.mainTexts.winterText}</MainText>
                        <Buttons>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.winter}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.winter} background={"transparent"}>Save</StyledBtn>
                        </Buttons>
                    </BottomSection>
                </Card>

                <Card>
                    <MainImg src={MainImageAutumn} alt="Main image"/>
                    <BottomSection>
                        <MainTitle>{theme.headers.autumnHeader}</MainTitle>
                        <MainText>{theme.mainTexts.autumnText}</MainText>
                        <Buttons>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.autumn}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.autumn} background={"transparent"}>Save</StyledBtn>
                        </Buttons>
                    </BottomSection>
                </Card>

                <Card>
                    <MainImg src={MainImageSpring} alt="Main image"/>
                    <BottomSection>
                        <MainTitle>{theme.headers.springHeader}</MainTitle>
                        <MainText>{theme.mainTexts.springText}</MainText>
                        <Buttons>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.spring}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.spring} background={"transparent"}>Save</StyledBtn>
                        </Buttons>
                    </BottomSection>
                </Card>

            </Box>
        </div>
    );
}

const Buttons = styled.div`
    display: flex;
    gap: 10px;
`

export default App;

