import React, { useState, useContext, useEffect } from "react";
import * as S from "./styled";
import { ProductsConText } from "containers/Popular";

export default function WrapFloatListCart({ currentState }) {
  const [isShow, setIsShow] = useState(true);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  const objectProduct = useContext(ProductsConText);

  console.log("objectProduct ben cart", objectProduct);

  // const isObject = Object.keys(objectProduct).length === 0;
  useEffect(() => {
    if (objectProduct) {
      console.log("objectProduct ", objectProduct);
      return (
        <div style={{ padding: "70px 0px" }}>
          <h2>name:{objectProduct.product.name} </h2>
          <h4>price:{objectProduct.product.price}</h4>
          <img
            src={objectProduct.product.image}
            alt="image product"
            style={{ width: "120px", height: "120px" }}
          />
        </div>
      );
    }
  }, []);
  return (
    <>
      <S.WrapFloatListCart onClick={() => handleShow()}>
        {objectProduct === undefined && null ? (
          <div style={{ padding: "70px 0px" }}>
            <h2>name:{objectProduct.product.name} </h2>
            <h4>price:{objectProduct.product.price}</h4>
            <img
              src={objectProduct.product.image}
              alt="image product"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
        ) : (
          <h2>Khong co sp</h2>
        )}
      </S.WrapFloatListCart>
    </>
  );
}
