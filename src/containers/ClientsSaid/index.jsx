import React, { useState, useRef } from "react";
import * as S from "./styled";
import { Heading2, Heading3, Text } from "components/common/Text";
import ImageClientsSaid from "images/clients-said-psd-final.png";

import ImageUserProfile from "./images/profile.png";
import ImageUserProfile2 from "./images/man2.png";
import ImageUserProfile3 from "./images/worker.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const [activeRight, setActiveRight] = useState("active");
  const [activeLeft, setActiveLeft] = useState();
  const slideRef = useRef();
  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    const stateSlide = slideRef.current.innerSlider.state.currentSlide;
    slideRef.current.slickNext();
    if (stateSlide === 0) {
      setActiveRight("active");
      setActiveLeft("nonactive");
    } else {
      setActiveRight("active");
      setActiveLeft("active");
    }
  };
  const prevSlide = () => {
    const stateSlide = slideRef.current.innerSlider.state.currentSlide;

    slideRef.current.slickPrev();
    if (stateSlide === 0) {
      setActiveRight("active");
      setActiveLeft("nonactive");
    } else {
      setActiveRight("active");
      setActiveLeft("active");
    }
  };

  return (
    <div className="container">
      <S.WrapClientSaid>
        <div className="row">
          <div className="col-md-5">
            <S.WrapImage>
              <img src={ImageClientsSaid} alt="" />
            </S.WrapImage>
          </div>
          <div className="col-md-7">
            <S.Inner>
              <S.WrapText>
                <Heading2 padding="40px 0px 0px 0px" size="30px">
                  What Our clients say about us
                </Heading2>
                <Text size="18px" isGrey mt="20px">
                  I am grateful to the company for the timely and exceptionally
                  accurate delivery of food . Everything is very tasty and hight
                  quality . And it follows that the weight loss plan i have
                  chosen really works ! I was surpriced
                </Text>
              </S.WrapText>
              <Slider {...settings} ref={slideRef}>
                <S.ClientSlide>
                  <S.ImageProfile src={ImageUserProfile} alt="" />
                  <S.UserInfor>
                    <Heading3>Seona PalmSmith,</Heading3>
                    <Text>Dixon Corp</Text>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                  </S.UserInfor>
                </S.ClientSlide>
                <S.ClientSlide>
                  <S.ImageProfile src={ImageUserProfile2} alt="" />
                  <S.UserInfor>
                    <Heading3>Seona PalmSmith,</Heading3>
                    <Text>Dixon Corp</Text>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                  </S.UserInfor>
                </S.ClientSlide>
                <S.ClientSlide>
                  <S.ImageProfile src={ImageUserProfile3} alt="" />
                  <S.UserInfor>
                    <Heading3>Seona PalmSmith,</Heading3>
                    <Text>Dixon Corp</Text>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                    <i className="fa fa-star me-2"></i>
                  </S.UserInfor>
                </S.ClientSlide>
              </Slider>
              <S.ButtonSlide>
                <S.BtnPrev
                  onClick={prevSlide}
                  className={activeLeft ? "active" : "nonactive"}
                >
                  <i className="fas fa-chevron-left"></i>
                </S.BtnPrev>
                <S.BtnNext
                  onClick={nextSlide}
                  className={activeRight ? "active" : "nonactive"}
                >
                  <i className="fas fa-chevron-right"></i>
                </S.BtnNext>
              </S.ButtonSlide>
            </S.Inner>
          </div>
        </div>
      </S.WrapClientSaid>
    </div>
  );
}
