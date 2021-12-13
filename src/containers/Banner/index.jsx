import React from "react";
import * as S from "./styled";
import { Heading2, Text } from "components/common/Text";
import BannerChicken from "./images/Banner-chicken-demo-psd1.png";

export default function Banner() {
  return (
    <>
      <S.WrapBanner>
        <div className="row">
          <div className="col-md-5">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="41px">
                Trại gà chúng tôi sẽ giao hàng với thời gian nhanh nhất đến
                khách hàng
              </Heading2>
              <Text size="19px" isGrey>
                Chúng tôi chuyên cung cấp gà thương phẩm ,gà chọi , gà thả vườn
                , gà Asil Thái Lan với chất lượng và giá tốt nhất trên thị
                trường
              </Text>
            </S.WrapText>
          </div>
          <div className="col-md-7">
            <S.WrapImage>
              <img src={BannerChicken} alt="image banner" />
            </S.WrapImage>
          </div>
        </div>
      </S.WrapBanner>
    </>
  );
}
