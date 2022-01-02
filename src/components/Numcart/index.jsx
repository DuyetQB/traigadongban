import React, { useState, useContext } from "react";
import * as S from "./styled";
import { ProductsConText } from "containers/Popular";

export default function NumCart({ children, ...rest }) {
  const objectProduct = useContext(ProductsConText);
  //   console.log("ben numcart", objectProduct);
  return (
    <>
      {/* {objectProduct.isWrapCartShow && (
        <S.WrapNumCart {...rest}>{objectProduct.number}</S.WrapNumCart>
      )} */}
      <S.WrapNumCart {...rest}>
        {/* {objectProduct ? objectProduct.product.number : 0} */}
      </S.WrapNumCart>
    </>
  );
}
