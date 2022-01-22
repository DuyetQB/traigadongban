import React, { useState } from 'react';
import * as S from './styled';

import { NavLink, useNavigate } from 'react-router-dom';

import { CartState } from 'store/ContextApi';
import Logo from 'images/logo-chicken-4.png';
// import Avata from "./images/user.png";
import WrapNumCart from 'components/Numcart';
import { AiFillDelete } from 'react-icons/ai';
import Button from 'components/Button';
import { ReactComponent as IconCart } from 'images/icon-cart.svg';
import { ReactComponent as IconSearch } from 'images/icon-search.svg';
import { ReactComponent as IconMenuHamburger } from 'images/icon-menu-hamburger.svg';

export default function Header() {
  const Navigate = useNavigate();
  const [isNavShow, setIsNavShow] = useState(false);
  // const [isBoxSearchShow, setIsBoxSearchShow] = useState(false);
  const [isBoxCartShow, setIsBoxCartShow] = useState(false);

  const handleNavShow = () => {
    setIsNavShow(!isNavShow);
  };

  // const handleBoxSearchShow = () => {
  //   setIsBoxSearchShow(!isBoxSearchShow);
  // };
  const handleBoxCartShow = () => {
    setIsBoxCartShow(!isBoxCartShow);
  };
  const handleDirectToCart = () => {
    Navigate('/cart');
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <S.Header>
      <div className="container">
        <S.WrapperFlex>
          {isNavShow && <S.BackDrop onClick={handleNavShow} className="d-block d-lg-none" />}
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
                <S.WrapIconCart onClick={handleBoxCartShow}>
                  <IconCart onClick={handleBoxCartShow} />
                  {cart.length > 0 ? <WrapNumCart>{cart.length}</WrapNumCart> : ''}

                  <S.WrapFloatCartItem className={isBoxCartShow ? 'show' : 'hide'}>
                    {cart.length > 0 ? (
                      <>
                        {cart.map((prod) => (
                          <span className="d-flex align-center cartItem" key={prod.id}>
                            <img src={prod.image} className="cartItemImg" alt={prod.name} />
                            <div className="cartItemDetail">
                              <span>{prod.name}</span>
                              <span>
                                {' '}
                                {prod.price.split('.')[0]}
                                {'.000'}.vnd
                              </span>
                            </div>
                            <AiFillDelete
                              fontSize="20px"
                              style={{ cursor: 'pointer', marginLeft: '10px' }}
                              onClick={() =>
                                dispatch({
                                  type: 'REMOVE_FROM_CART',
                                  payload: prod,
                                })
                              }
                            />
                          </span>
                        ))}

                        <Button
                          style={{ width: '95%', margin: '0 10px' }}
                          onClick={() => handleDirectToCart()}
                          isBlue
                          isHover>
                          Go To Cart
                        </Button>
                      </>
                    ) : (
                      <span style={{ padding: 10 }}>Cart is Empty!</span>
                    )}
                  </S.WrapFloatCartItem>
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
              <S.WrapIconCart onClick={handleBoxCartShow}>
                <IconCart />
                <WrapNumCart />
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
