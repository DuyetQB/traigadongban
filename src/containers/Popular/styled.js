import styled from "styled-components";
import { media } from "styles/breakPoint";

export const WrapPopular = styled.div`
  padding: 20px 0px;
  position: relative;
`;
export const WrapText = styled.div`
  padding: 20px;
  text-align: center;
`;
export const PopularProducts = styled.div`
  padding-top: 30px;
`;
export const ProductItem = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 0.1px solid ${({ theme }) => theme.colors.blue2};
  padding: 5px;
  text-align: center;
  margin: 20px;
  transition: all 0.3s ease;
 position: relative;
  color: ${({ theme }) => theme.colors.white1};
  ${media.tablet`
  margin: 10px;
  padding: 5px;
  `}
  ${media.smallPhone`
  background: ${({ theme }) => theme.colors.blue2};
  `}
  &:hover {
    background: ${({ theme }) => theme.colors.blue2};
    box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};

     & button {
      background: ${({ theme }) => theme.colors.white1};
      color: ${({ theme }) => theme.colors.purple};
      font-weight: ${({ theme }) => theme.fontWeight.extraBold}
    } 
    }
  }

  & img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

export const WrapFloat = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 20px;
`;

export const WrapCollections = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.h3``;

export const SeeAllMenu = styled.div`
  padding: 60px 0px;
  position: relative;
  display: flex;
  justify-content: center;
`;


export const WrapFloatListCart = styled.div`
  padding: 20px ;
 position:fixed;
 right:30px;
 top:150px;
 background:${({ theme }) => theme.colors.white1};
 box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
 width:30%;
 height:auto;
`;
