import React from "react";
import * as S from "./styled";
export default function InputPlaceHolder({
  error,
  name,
  text,
  register = () => {},
  ...rest
}) {
  return (
    <>
      <S.Text>{text}</S.Text>
      <S.InputPlaceHolder
        name={name}
        $error={error}
        {...register(name)}
        {...rest}
      />
      <S.Error>{error}</S.Error>
    </>
  );
}
