import React from "react";
import * as S from "./styled";
import { Heading2, Text } from "components/common/Text";
import BannerChicken from "./images/Banner-chicken-demo-psd1.png";
import { ReactComponent as IconSendFly } from "./images/icon-send.svg";
import AppLayout from "components/AppLayout";

export default function AboutUs() {
  return (
    <AppLayout>
      <div className="container">
        <S.WrapAboutUs>
          <div className="row">
            <div className="col-md-12">
              <S.WrapImage>
                <img src={BannerChicken} alt="" />
              </S.WrapImage>
            </div>
            <div className="col-md-12">
              <S.WrapText>
                <div className="d-flex align-items-center pt-5">
                  <IconSendFly />
                  <Heading2 size="30px" margin="0px 10px">
                    Chúng tôi là ai ?
                  </Heading2>
                </div>
                <div className="row pt-3">
                  <div className="col-md-5">
                    <Text size="18px" isGrey>
                      {"+"} Chúng tôi là trang trại chuyên cung cấp gà thương
                      phẩm ,gà chọi , gà thả vườn , gà Asil Thái Lan với chất
                      lượng và giá tốt nhất trên thị trường . Bước đầu cung cấp
                      loại gia cầm này tới những khách hàng trên địa bàn . Sau
                      đó mở rộng thị trường lớn hơn trong tương lai .
                    </Text>
                  </div>
                  <div className="col-md-7">
                    <S.WrapIframe>
                      <S.Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1405.024344526979!2d105.8782799578067!3d17.768067796962928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3138ddf7d991e90f%3A0x35800d9c7b30194d!2zS2h1IGNoxINuIG51w7RpIGfDoCB0aMawxqFuZyBwaOG6qW0sIGfDoCBjaOG7jWksIGfDoCBBc2lsKFRow6FpIExhbikgLSDEkMO0bmcgQmFu!5e1!3m2!1svi!2s!4v1639393961461!5m2!1svi!2s"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                      ></S.Iframe>
                    </S.WrapIframe>
                  </div>
                </div>

                <div className="d-flex align-items-center pt-5">
                  <IconSendFly />
                  <Heading2 size="30px" margin="0px 10px">
                    Lý do mà trại gà Đông Ban ra đời ?
                  </Heading2>
                </div>
                <div className="row pt-3">
                  <div className="col-md-8">
                    <Text size="18px" isGrey>
                      {"+"} Có một vấn đề khá lớn đối với thị trường hiện nay đó
                      là chưa có một nhà cung cấp gà thả thương phẩm , gà chọi ,
                      gà Asil Thái Lan đủ chất lượng và giá tốt để phục vụ tốt
                      nhu cầu của khách hàng . Cho nên trang trại nuôi gà Đông
                      Ban ra đời để giải quyết điều đó .
                    </Text>
                  </div>
                  <div className="col-md-7">
                    <S.WrapIframe></S.WrapIframe>
                  </div>
                </div>

                <div className="d-flex align-items-center pt-5">
                  <IconSendFly />
                  <Heading2 size="30px" margin="0px 10px">
                    Mục tiêu mà trại gà hướng tới ?
                  </Heading2>
                </div>
                <div className="row pt-3">
                  <div className="col-md-8">
                    <Text size="18px" isGrey>
                      {"+"} Chúng tôi đang hướng tới việc phục vụ khách hàng tốt
                      nhất . Và theo đó chúng tôi sẽ áp dụng những công nghệ mới
                      vào sản phẩm nhằm giúp khách hàng mua hàng , đặt hàng trên
                      trang dễ dàng hơn .
                    </Text>
                  </div>
                  <div className="col-md-7">
                    <S.WrapIframe></S.WrapIframe>
                  </div>
                </div>
              </S.WrapText>
            </div>
          </div>
        </S.WrapAboutUs>
      </div>
    </AppLayout>
  );
}
