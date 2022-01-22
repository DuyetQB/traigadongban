import React from 'react';
import * as S from './styled';
import { Heading2, Text } from 'components/common/Text';
import ButtonArrow from 'components/ButtonArrow';
import { CartState } from 'store/ContextApi';
import Product from 'containers/Product';
export const Popular = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => (sort === 'lowToHigh' ? a.price - b.price : b.price - a.price));
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
    }

    return sortedProducts;
  };

  return (
    <div className="container">
      <S.WrapPopular>
        <div className="row justify-content-center">
          <div className="col-md-7">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="30px">
                Những sản phẩm phổ biến của chúng tôi
              </Heading2>
              <Text isGrey>Đây là những sản phẩm mà chúng tôi cung cấp dành cho khách hàng</Text>
            </S.WrapText>
          </div>
        </div>

        <S.PopularProducts>
          <div className="row">
            {transformProducts().map((prod) => (
              <div className="col-md-4" key={prod.id}>
                <Product prod={prod} />
              </div>
            ))}
          </div>
        </S.PopularProducts>
        <S.SeeAllMenu>
          <ButtonArrow btntext="Xem tất cả" right="unset" padding="10px 21px" shadow />
        </S.SeeAllMenu>
      </S.WrapPopular>
    </div>
  );
};
