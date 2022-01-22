import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  padding: 20px 0px;
  background: ${({ theme }) => theme.colors.white1};
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 144;

  & .show {
    display: block;
  }
  & .hide {
    display: none;
  }
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
  position: relative;
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

export const WrapNavMobile = styled.ul`
  position: absolute;
  width: 70%;
  top: 63px;
  right: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white1};
  z-index: 10;
  box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
  ${"" /* border: 1px solid ${({ theme }) => theme.colors.grey1}; */}
  & li {
    padding: 10px 0px;
    & a {
      display: block;
      color: ${({ theme }) => theme.colors.black};
      border-bottom: 2px solid ${({ theme }) => theme.colors.grey1};

      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.blue2};
      }
    }
    & .active {
      border-bottom: 2px solid ${({ theme }) => theme.colors.blue2};
    }
  }
`;

export const BackDrop = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0px;
  right: 0;
  z-index: 2;
`;

export const WrapIconClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 10px;
  & i {
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export const WrapFloatCartItem = styled.div`
  width: 460px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
  position: absolute;
  right: 20px;
  background: ${({ theme }) => theme.colors.white1};
  height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 120;

  & .cartItem {
    padding: 20px;
    display: flex;
  }
  & .cartItemDetail {
    padding-left: 10px;
    flex: 1;
  }

  & .cartItemImg {
    width: 140px;
    height: 140px;
    width: 100px;
    height: 80px;
    object-fit: cover;
  }
`;
