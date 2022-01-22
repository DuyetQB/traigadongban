import React from "react";
import * as S from "./styled";

export default function NumCart({ children, ...rest }) {
  return (
    <>
      <S.WrapNumCart {...rest}>{children}</S.WrapNumCart>
    </>
  );
}
