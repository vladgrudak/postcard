import styled, {css} from "styled-components";
import {theme} from "./Theme.styled";
import {MyAnimation} from "./animations/Animations";

type StyledBtnPropsType = {
    color?: string
    btnType: "primary" | "outlined"
    background?: string
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  cursor: pointer;
  height: 30px;
  width: 86px;
  border: 1px solid ${theme.colors.default}; 
  border-radius: 5px;
  font-size: 0.625rem;
  font-weight: bold;
  line-height: 2;
  color: ${props => props.color || theme.colors.default}; 

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    color: ${props => props.color || "grey"};
    background-color: ${props => props.background || theme.colors.default};
    border: 1px solid ${props => props.color || theme.colors.default};
    
    &:hover {
      transform: scale(1.1);
      transition: all .4s ease;
    }
  `}


  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    color: ${props => props.color || theme.colors.default};
    background-color: ${props => props.background || theme.colors.default};
    border: 1px solid ${props => props.background || theme.colors.default};

    &:hover {
      animation: ${MyAnimation} .6s ease;
    }
  `}

`