import styled from "styled-components";

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.grey3};
`;

export const WrapLogo = styled.div``;
export const Logo = styled.img``;
export const WrapLinks = styled.ul`
  & li {
    padding-bottom: 15px;
    & a {
      color: ${({ theme }) => theme.colors.black};
      text-decoration: underline;
    }
  }
`;

export const Inner = styled.div`
  padding: 50px 0px 20px 0px;
`;
export const CopyRight = styled.div`
  display: flex;
  padding: 20px 0px;
  text-align: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.grey1};
`;
