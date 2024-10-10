import React from 'react';
import './App.css';
import styled from "styled-components";
import MainImage from "./img/main_1.png";

function App() {
    return (
        <div className="App">
            <Box>
                <Card>
                    <MainImg src={MainImage} alt="Main image"/>
                    <BottomSection>
                        <MainHeader>Headline</MainHeader>
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

const Card = styled.div`
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
  margin: 10px 10px 0 10px;
`

const MainHeader = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #000;
`

const BottomSection = styled.section`
  margin: 20px 20px 22px 20px;
  background-color: #b0afaf;
`
