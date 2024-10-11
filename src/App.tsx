import React from 'react';
import './App.css';
import MainImage from "./img/main_1.png";
import SecondaryImage from "./img/secondary_1.png"
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
                    <MainImg src={MainImage} alt="Main image"/>
                    <BottomSection>
                        <MainHeader>{theme.headers.summerHeader}</MainHeader>
                        <MainText>{theme.mainTexts.summerText}</MainText>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.primary}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.primary} background={"transparent"}>Save</StyledBtn>
                    </BottomSection>
                </Card>

                <Card>
                    <MainImg src={SecondaryImage} alt="Main image"/>
                    <BottomSection>
                        <MainHeader>{theme.headers.winterHeader}</MainHeader>
                        <MainText>{theme.mainTexts.winterText}</MainText>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.secondary}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.secondary} background={"transparent"}>Save</StyledBtn>
                    </BottomSection>
                </Card>

                <Card>
                    <MainImg src={SecondaryImage} alt="Main image"/>
                    <BottomSection>
                        <MainHeader>{theme.headers.winterHeader}</MainHeader>
                        <MainText>{theme.mainTexts.winterText}</MainText>
                        <StyledBtn btnType={"primary"} color={"#fff"} background={theme.colors.secondary}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"} color={theme.colors.secondary} background={"transparent"}>Save</StyledBtn>
                    </BottomSection>
                </Card>

            </Box>
        </div>
    );
}

export default App;

