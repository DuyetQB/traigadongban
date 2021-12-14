import React from "react";
import * as S from "./styled";
// import Logo from "images/logo-chicken-3.png";
// import Logo from "images/dongban-psd.png";
import Logo from "images/logo-chicken-4.png";
import { NavLink } from "react-router-dom";
import { ReactComponent as IconCart } from "images/icon-cart.svg";
import { ReactComponent as IconSearch } from "images/icon-search.svg";
import { ReactComponent as IconMenuHamburger } from "images/icon-menu-hamburger.svg";

export default function Header() {
  return (
    <S.Header>
      <div className="container">
        <S.WrapperFlex>
          <S.WrapLogo>
            <NavLink to="/">
              <S.Logo src={Logo} alt="logo" />
            </NavLink>
          </S.WrapLogo>
          <div className="d-none d-lg-block">
            <S.WrapList>
              <li>
                <NavLink to="/">Trang chủ</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">Về chúng tôi</NavLink>
              </li>
              <li>
                <NavLink to="/register">Đăng kí</NavLink>
              </li>
              <li>
                <NavLink to="/login">Đăng nhập</NavLink>
              </li>
              <li>
                <S.WrapIconCart>
                  <IconCart />
                </S.WrapIconCart>
              </li>
              <li>
                <S.WrapIconSearch>
                  <IconSearch />
                </S.WrapIconSearch>
              </li>
            </S.WrapList>
          </div>
          <S.WrapIconsMobile className="d-sm-block d-lg-none">
            <div className="d-flex">
              <S.WrapIconSearch>
                <IconSearch />
              </S.WrapIconSearch>
              <S.WrapIconCart>
                <IconCart />
              </S.WrapIconCart>
              <S.WrapIconHamburger>
                <IconMenuHamburger />
              </S.WrapIconHamburger>
            </div>
          </S.WrapIconsMobile>
        </S.WrapperFlex>
      </div>
    </S.Header>
  );
}
