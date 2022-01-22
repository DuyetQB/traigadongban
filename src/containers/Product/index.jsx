import React, { useEffect } from 'react';
import { Text } from 'components/common/Text';
import * as S from './styled';
import { Button } from 'react-bootstrap';
import { CartState } from 'store/ContextApi';
export default function Product({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  useEffect(() => {
    const item = cart.some((p) => p.id === prod.id);
    if (item > 1) {
      return dispatch({
        type: 'ADD_MORE_QTY',
        payload: item,
      });
    }
  }, [cart]);

  return (
    <>
      <S.ProductItem>
        <S.ImageProduct src={prod.image} alt={prod.name} />
        <S.WrapFloat>
          <Text size="20px">{prod.name}</Text>
          <S.WrapCollections>
            <S.Price>
              {prod.price}
              {'.000'} {'-vnd'}
            </S.Price>

            <Button
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: prod,
                })
              }
              disabled={!prod.inStock}>
              Add to Cart
            </Button>
          </S.WrapCollections>
        </S.WrapFloat>
      </S.ProductItem>
    </>
  );
}
