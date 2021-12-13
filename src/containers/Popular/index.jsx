import React, { useState } from "react";
import * as S from "./styled";

import { Heading2, Text } from "components/common/Text";
import ButtonArrow from "components/ButtonArrow";
import ButtonAddToCart from "components/ButtonAddToCart";

export default function Popular() {
  const [products, setProducts] = useState([
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
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/M%E1%BB%99t_con_g%C3%A0_tr%E1%BB%91ng_Li%C3%AAn_Minh.jpg",
      price: 500,
    },
    {
      id: 3,
      name: "ga loai 3",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/M%E1%BB%99t_con_g%C3%A0_tr%E1%BB%91ng_Li%C3%AAn_Minh.jpg",
      price: 350,
    },
    {
      id: 4,
      name: "ga loai 4",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/M%E1%BB%99t_con_g%C3%A0_tr%E1%BB%91ng_Li%C3%AAn_Minh.jpg",
      price: 370,
    },
    {
      id: 5,
      name: "ga loai 5",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/M%E1%BB%99t_con_g%C3%A0_tr%E1%BB%91ng_Li%C3%AAn_Minh.jpg",
      price: 380,
    },
    {
      id: 6,
      name: "ga loai 6",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/M%E1%BB%99t_con_g%C3%A0_tr%E1%BB%91ng_Li%C3%AAn_Minh.jpg",
      price: 550,
    },
  ]);
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
                      <ButtonAddToCart handleClick={(e) => console.log(e)}>
                        Mua
                      </ButtonAddToCart>
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
    </div>
  );
}
