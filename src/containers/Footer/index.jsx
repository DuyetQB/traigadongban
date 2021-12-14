import React from "react";
import * as S from "./styled";
import Logo from "images/dongban-psd.png";
import { NavLink, Link } from "react-router-dom";
import { Text, Heading3 } from "components/common/Text";

export default function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <S.Inner>
          <div className="row">
            <div className="col-md-3">
              <S.WrapLogo>
                <NavLink to="/">
                  <S.Logo src={Logo} alt="logo" />
                </NavLink>
              </S.WrapLogo>
              <Text padding="10px 0px">
                Cung cấp gà chất lượng,giá tốt, giao hàng nhanh
              </Text>
            </div>
            <div className="col-md-3">
              <S.WrapLinks>
                <li>
                  <Heading3 size="17px" weight="700">
                    Liên kết nhanh
                  </Heading3>
                </li>
                <li>
                  <Link to="/about-us">Về chúng tôi </Link>
                </li>
              </S.WrapLinks>
            </div>
            <div className="col-md-3">
              <S.WrapLinks>
                <li>
                  <Heading3 size="17px" weight="700">
                    Liên kết nhanh
                  </Heading3>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Tr%E1%BA%A1i-g%C3%A0-%C4%90%C3%B4ng-Ban-109847811549112"
                    target="_blank"
                  >
                    Liên hệ qua facebook{" "}
                  </a>
                </li>
              </S.WrapLinks>
            </div>
            <div className="col-md-3"></div>
          </div>
        </S.Inner>
        <S.CopyRight>
          <Text>Copyright © Duyet dinh 2021 . All rights reserved</Text>
        </S.CopyRight>
      </div>
    </S.Footer>
  );
}
