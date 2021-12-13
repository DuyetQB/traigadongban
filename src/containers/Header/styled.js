import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  padding: 20px 0px;
  background: ${({ theme }) => theme.colors.white1};
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 144;
`;
export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WrapLogo = styled.div``;
export const Logo = styled.img``;

const slideGoUp = keyframes`
from {
    height:0px;
  }

  to {
    height:100%;
  }
`;

export const WrapList = styled.ul`
  display: flex;
  & li {
    padding: 0px 10px;
  }
  .active {
    color: #fff;
    background: #7600dc;
  }
  & a {
    border-radius: 5px;
    position: relative;
    z-index: 2;
    padding: 5px 10px;
    color: ${({ theme }) => theme.colors.black};
    &:hover {
      color: ${({ theme }) => theme.colors.white1};

      &::before {
        color: ${({ theme }) => theme.colors.white1};
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        content: "";
        background: ${({ theme }) => theme.colors.purple};
        height: 0px;
        width: 100%;
        transition: all 0.4s ease-in-out;
        animation: ${slideGoUp} 0.4s ease-in-out forwards;
        z-index: -1;
        border-radius: 5px;
      }
    }
  }
`;

export const WrapIconSearch = styled.div`
  cursor: pointer;
`;

export const WrapIconCart = styled.div`
  cursor: pointer;
`;
export const WrapIconsMobile = styled.div`
  & div {
    padding-left: 20px;
    padding-right: 10px;
  }
`;

export const WrapIconHamburger = styled.div`
  cursor: pointer;
`;
