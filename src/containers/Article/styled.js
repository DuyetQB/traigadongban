import styled from "styled-components";
import { media } from "styles/breakPoint";

export const WrapArticle = styled.div`
  padding: 20px 0px;
`;
export const WrapText = styled.div`
  padding: 20px;
  text-align: center;
`;
export const WrapArticleItem = styled.div`
  padding: 20px 0px;
`;
export const ArticleItem = styled.div`
  padding: 20px 0px;
`;

export const ArticleItemImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  object-fit: cover;
`;

export const WrapNotification = styled.div`
  width: 60%;
  height: 80%;
  padding: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white1};
  box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
  border: 1px solid ${({ theme }) => theme.colors.blue2};
  border-radius: ${({ theme }) => theme.borderRadius.base};

  ${media.smallPhone`
  width:100%;
  height:90%;
`}

  & h3 {
    color: ${({ theme }) => theme.colors.blue3};
  }
`;

export const IconClose = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  & i {
    font-size: ${({ theme }) => theme.fontSize.md};
    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const Video = styled.video`
  width: 300px;

  -webkit-mask-box-image: url("https://media.flaticon.com/dist/min/img/video/sad/mask.svg");
`;
