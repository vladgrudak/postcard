import styled from "styled-components";
import { theme } from "./Theme.styled";

export const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  
  @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: left;
    row-gap: 20px;
    padding-top: 20px;
  }
`