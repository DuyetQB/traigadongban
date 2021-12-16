import React, { useState } from "react";
import * as S from "./styled";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ASSET_URL } from "constants/configs";

import Logo from "images/logo-chicken-4.png";
import Avata from "./images/user.png";

import { ReactComponent as IconCart } from "images/icon-cart.svg";
import { ReactComponent as IconSearch } from "images/icon-search.svg";
import { ReactComponent as IconMenuHamburger } from "images/icon-menu-hamburger.svg";

export default function Header() {
  // const isAuth = useSelector((state) => state.authReducer.isAuth);
  // const currentUser = useSelector((state) => state.authReducer.currentUser);

  const [isNavShow, setIsNavShow] = useState(false);
  const [isBoxSearchShow, setIsBoxSearchShow] = useState(false);
  const [isBoxCartShow, setIsBoxCartShow] = useState(false);

  const handleNavShow = () => {
    setIsNavShow(!isNavShow);
  };

  const handleBoxSearchShow = () => {
    setIsBoxSearchShow(!isBoxSearchShow);
  };
  const handleBoxCartShow = () => {
    setIsBoxCartShow(!isBoxCartShow);
  };
  return (
    <S.Header>
      <div className="container">
        <S.WrapperFlex>
          {isNavShow && (
            <S.BackDrop onClick={handleNavShow} className="d-block d-lg-none" />
          )}
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
                <IconMenuHamburger onClick={handleNavShow} />
              </S.WrapIconHamburger>
            </div>
          </S.WrapIconsMobile>
        </S.WrapperFlex>
      </div>
      {isNavShow && (
        <S.WrapNavMobile className="d-block d-lg-none">
          <S.WrapIconClose onClick={handleNavShow}>
            <i className="fa fa-close"></i>
          </S.WrapIconClose>
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
        </S.WrapNavMobile>
      )}
    </S.Header>
  );
}
