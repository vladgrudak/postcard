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
  border: 1px solid ${theme.colors.primary}; /*Будет пропс или пропс-переменная*/
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  line-height: 2;
  color: ${props => props.color || "grey"}; /*Будет пропс или пропс-переменная*/

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    color: ${props => props.color || "grey"};
    background-color: ${props => props.background || "grey"};
    border: 1px solid ${props => props.color || "grey"};
    
    &:hover {
      transform: scale(1.1);
      transition: all .4s ease;
    }
  `}


  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    color: ${props => props.color || "grey"};
    background-color: ${props => props.background || "grey"};
    border: 1px solid ${props => props.background || "grey"};

    &:hover {
      animation: ${MyAnimation} .3s ease;
    }
  `}

`