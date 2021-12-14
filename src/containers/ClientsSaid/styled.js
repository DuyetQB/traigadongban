import styled from "styled-components";
import { media } from "styles/breakPoint";

export const WrapClientSaid = styled.div`
  padding: 60px 0px;
`;
export const WrapText = styled.div`
  padding: 20px 60px 20px 20px;
  ${media.smallPhone`
  padding:20px;
  `}
`;
export const WrapImage = styled.div``;

export const UserInfor = styled.div`
  padding-left: 20px;
  & i {
    color: ${({ theme }) => theme.colors.yellow2};
  }
`;
export const ClientSlide = styled.div`
  display: flex !important;
  align-items: center;
  position: relative;
  padding-top: 20px;
`;

export const ImageProfile = styled.img`
  width: 100px;
  height: 100px;
`;
export const Inner = styled.div`
  position: relative;
`;

export const ButtonSlide = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  position: absolute;
  right: 30px;
  bottom: 0px;
  flex: 2;
  ${media.smallPhone`
  bottom: -70px;
  `}
  .active {
    background: linear-gradient(
      70deg,
      ${({ theme }) => theme.colors.blue2},
      ${({ theme }) => theme.colors.blue1}
    );
    box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
    & i {
      color: ${({ theme }) => theme.colors.white1};
    }
  }
  & button {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.blue1};
    outline: none;
    border-radius: ${({ theme }) => theme.borderRadius.xxl};

    background: ${({ theme }) => theme.colors.white1};
    transition: all 0.4s ease;
    i {
      color: ${({ theme }) => theme.colors.blue1};
    }

    &:hover {
      background: linear-gradient(
        70deg,
        ${({ theme }) => theme.colors.blue2},
        ${({ theme }) => theme.colors.blue1}
      );
      box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
      & i {
        color: ${({ theme }) => theme.colors.white1};
      }
    }
  }
`;

export const BtnNext = styled.button`
  margin: 10px;
`;

export const BtnPrev = styled.button`
  margin: 10px;
`;
