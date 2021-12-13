import React, { useState } from "react";
import * as S from "./styled";
import { Heading2, Heading3, Text } from "components/common/Text";
import IconArrowRight from "images/icon-long-arrow-right.png";

export default function Banner() {
  const [isShow, setIsShow] = useState(false);
  const hansleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="container">
      {isShow && (
        <S.WrapNotification>
          <Heading3 padding="20px 0px">
            Trang web trại gà của chúng tôi đang cập nhật và nâng cấp . Cảm ơn
            khách hàng đã ghé thăm{" "}
          </Heading3>
          <S.Video
            src="https://media.flaticon.com/dist/min/img/video/sad/video.mp4"
            loop
            autoPlay
            muted
          ></S.Video>
          <S.IconClose onClick={() => hansleShow()}>
            <i className="fa fa-close"></i>
          </S.IconClose>
        </S.WrapNotification>
      )}

      <S.WrapArticle>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="30px">
                Articles and useful tips
              </Heading2>
              <Text isGrey>
                Read for useful information about tasty and healthy food .
                Interesting events and recipes . New meal plans and specialized
                diets for weight loss or gain
              </Text>
            </S.WrapText>
          </div>
          <div className="col-md-12">
            <S.WrapArticleItem>
              <div className="row">
                <div className="col-md-4">
                  <S.ArticleItem>
                    <S.ArticleItemImage
                      src="https://images.pexels.com/photos/1579926/pexels-photo-1579926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt=""
                    />
                    <Heading3 weight="700" mt="20px">
                      New seafood recipe perfect for losing weight
                    </Heading3>
                    <Text mt="20px">
                      Mass communication has led to modern marketing strategles
                      to continue focusing on brand awareness
                    </Text>
                    <div className="d-flex align-items-center">
                      <Text margin="0px 10px 0px 0px" weight="700">
                        Read more
                      </Text>
                      <img
                        src={IconArrowRight}
                        alt=""
                        style={{ width: "30px" }}
                      />
                    </div>
                  </S.ArticleItem>
                </div>
                <div className="col-md-4">
                  <S.ArticleItem>
                    <S.ArticleItemImage
                      src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt=""
                    />
                    <Heading3 weight="700" mt="20px">
                      Balance of proteins , fats and carbo . How do I get it ?
                    </Heading3>
                    <Text mt="20px">
                      Mass communication has led to modern marketing strategles
                      to continue focusing on brand awareness
                    </Text>
                    <div className="d-flex align-items-center">
                      <Text margin="0px 10px 0px 0px" weight="700">
                        Read more
                      </Text>
                      <img
                        src={IconArrowRight}
                        alt=""
                        style={{ width: "30px" }}
                      />
                    </div>
                  </S.ArticleItem>
                </div>
                <div className="col-md-4">
                  <S.ArticleItem>
                    <S.ArticleItemImage
                      src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt=""
                    />
                    <Heading3 weight="700" mt="20px">
                      The importance of proper and healthy eating
                    </Heading3>
                    <Text mt="20px">
                      Large distribution and heavy promotions . The fast - paced
                      environment of digital payment service .
                    </Text>
                    <div className="d-flex align-items-center">
                      <Text margin="0px 10px 0px 0px" weight="700">
                        Read more
                      </Text>
                      <img
                        src={IconArrowRight}
                        alt=""
                        style={{ width: "30px" }}
                      />
                    </div>
                  </S.ArticleItem>
                </div>
              </div>
            </S.WrapArticleItem>
          </div>
        </div>
      </S.WrapArticle>
    </div>
  );
}
