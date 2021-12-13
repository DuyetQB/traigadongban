import styled from "styled-components";
import { media } from "styles/breakPoint";

export const WrapBanner = styled.div`
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
    object-fit: cover;
  }
`;
