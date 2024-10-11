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
import {MainHeader} from "./styles/MainHeader";
import {BottomSection} from "./styles/BottomSection";
import {MainText} from "./styles/MainText";

function App() {
    return (
        <div className="App">
            <Box>

                <Card>
                    <MainImg src={MainImageSummer} alt="Main image"/>
                    <BottomSection>
                        <MainHeader>{theme.headers.summerHeader}</MainHeader>
                        <MainText>{theme.mainTexts.summerText}</MainText>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.summer}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.summer} background={"transparent"}>Save</StyledBtn>
                    </BottomSection>
                </Card>

                <Card>
                    <MainImg src={MainImageWinter} alt="Main image"/>
                    <BottomSection>
                        <MainHeader>{theme.headers.winterHeader}</MainHeader>
                        <MainText>{theme.mainTexts.winterText}</MainText>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.winter}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.winter} background={"transparent"}>Save</StyledBtn>
                    </BottomSection>
                </Card>

                <Card>
                    <MainImg src={MainImageAutumn} alt="Main image"/>
                    <BottomSection>
                        <MainHeader>{theme.headers.autumnHeader}</MainHeader>
                        <MainText>{theme.mainTexts.autumnText}</MainText>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.autumn}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.autumn} background={"transparent"}>Save</StyledBtn>
                    </BottomSection>
                </Card>

                <Card>
                    <MainImg src={MainImageSpring} alt="Main image"/>
                    <BottomSection>
                        <MainHeader>{theme.headers.springHeader}</MainHeader>
                        <MainText>{theme.mainTexts.springText}</MainText>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.spring}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.spring} background={"transparent"}>Save</StyledBtn>
                    </BottomSection>
                </Card>

            </Box>
        </div>
    );
}

export default App;

