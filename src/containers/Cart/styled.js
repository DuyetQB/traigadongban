import styled from "styled-components";
import { NavLink as Links } from "react-router-dom";

export const Link = styled(Links)`
  color: ${({ theme }) => theme.colors.black};
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blueDark};
  }
`;

export const WrapFloatListCart = styled.div`
  padding: 20px;
  position: fixed;
  right: 30px;
  top: 150px;
  background: ${({ theme }) => theme.colors.white1};
  box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
  width: 30%;
  height: auto;
`;
