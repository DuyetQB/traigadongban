import React, { useState, useEffect, useReducer, createContext } from "react";
import * as S from "./styled";

import { Heading2, Text } from "components/common/Text";
import ButtonArrow from "components/ButtonArrow";
import ButtonAddToCart from "components/ButtonAddToCart";
import Button from "components/Button";
import WrapFloatListCart from "containers/Cart";
import WrapNumCart from "components/Numcart";

export const ProductsConText = createContext();

export const Popular = () => {
  const [number, setNumber] = useState(0);
  const [isWrapCartShow, setIsWrapCartShow] = useState(false);

  const initState = {
    product: [],
  };
  const products = [
    {
      id: 1,
      name: "ga loai 1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/M%E1%BB%99t_con_g%C3%A0_tr%E1%BB%91ng_Li%C3%AAn_Minh.jpg",
      price: 300,
    },
    {
      id: 2,
      name: "ga loai 2",
      image: "https://kenhphunu.com/media/102015/1502730000/conga.jpg",
      price: 500,
    },
    {
      id: 3,
      name: "ga loai 3",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Rhode_Island_Red_Rooster2.JPG",
      price: 350,
    },
    {
      id: 4,
      name: "ga loai 4",
      image:
        "https://photo-cms-baonghean.zadn.vn/w607/Uploaded/2021/nkdkswkqoc/201701/original/images1791113_k_t_qu__h_nh__nh_cho_g__tr_ng_g_y_586b7f11dde1a.jpg",
      price: 370,
    },
    {
      id: 5,
      name: "ga loai 5",
      image:
        "https://wall.vn/wp-content/uploads/2020/02/hinh-anh-con-ga-24.jpg",
      price: 380,
    },
    {
      id: 6,
      name: "ga loai 6",
      image:
        "https://sachgiai.com/uploads/news/2015_10/con-ga-trong-nha-em.jpg",
      price: 550,
    },
  ];

  const handleAddToCart = (payload) => {
    setNumber((prev) => prev + 1);
    setIsWrapCartShow(true);
    console.log("payload", payload);
    dispatch({ type: "ADD_PRODUCTS", payload: payload });
  };

  const productsReducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCTS":
        return {
          ...state,
          product: action.payload,
        };
        break;
      default:
        return state;
    }
  };
  const [prod, dispatch] = useReducer(productsReducer, initState);
  const { product } = prod;
  const objectContext = {
    number,
    isWrapCartShow,
    product,
  };

  useEffect(() => {
    console.log("dispach");
  }, [product]);

  

  return (
    <div className="container">
      <S.WrapPopular>
        <div className="row justify-content-center">
          <div className="col-md-7">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="30px">
                Những sản phẩm phổ biến của chúng tôi
              </Heading2>
              <Text isGrey>
                Đây là những sản phẩm mà chúng tôi cung cấp dành cho khách hàng
              </Text>
            </S.WrapText>
          </div>
        </div>

        <S.PopularProducts>
          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-4" key={index}>
                <S.ProductItem>
                  <img src={product.image} alt="image-product" />
                  <S.WrapFloat>
                    <Text size="20px">{product.name}</Text>
                    <S.WrapCollections>
                      <S.Price>
                        {product.price}
                        {".000"} {"-vnd"}
                      </S.Price>
                      <Button
                        padding="10px 20px"
                        onClick={() => handleAddToCart(product)}
                      >
                        Mua
                      </Button>
                    </S.WrapCollections>
                  </S.WrapFloat>
                </S.ProductItem>
              </div>
            ))}
          </div>
        </S.PopularProducts>
        <S.SeeAllMenu>
          <ButtonArrow
            btntext="Xem tất cả"
            right="unset"
            padding="10px 21px"
            shadow
          />
        </S.SeeAllMenu>
      </S.WrapPopular>
      {console.log("prod", prod)}
      <ProductsConText.Provider value={objectContext}>
        <WrapFloatListCart currentState={prod} />
        <WrapNumCart />
      </ProductsConText.Provider>
    </div>
  );
};
