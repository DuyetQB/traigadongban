import styled from "styled-components";
import { media } from "styles/breakPoint";

export const WrapSupport = styled.div`
  padding: 60px 0px;
`;
export const WrapText = styled.div`
  padding: 20px 60px 20px 60px;

  ${media.smallPhone`
  padding:20px;
  `}

  & p {
    ${media.smallPhone`
  font-size:16px;
  `}
  }
`;
export const WrapImage = styled.div`
  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

export const WrapFormSupport = styled.form`
  margin-top: 40px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
  border: 1px solid rgba(255, 255, 255, 0.3);
  & input {
    margin: 20px 0px;
    padding: 10px;
    border-radius: ${({ theme }) => theme.borderRadius.base};
    border: 2px solid ${({ theme }) => theme.colors.grey1};
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.blue2};
    }
  }
`;

export const Text = styled.span`
  padding: 0.5em;
  margin: 20px 0px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
