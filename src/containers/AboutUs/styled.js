import styled from "styled-components";
import { media } from "styles/breakPoint";

export const WrapAboutUs = styled.div`
  padding: 60px 0px;
`;
export const WrapText = styled.div`
  padding: 20px;

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

export const WrapIframe = styled.div`
  padding: 0px 30px;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 200px;
`;
