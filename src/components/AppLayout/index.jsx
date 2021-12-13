import React from "react";
import * as S from "./styled";
import Header from "containers/Header";
// import Footer from "containers/Footer";
export default function AppLayout({ children }) {
  return (
    <S.AppLayout>
      <Header />
      <S.Content>{children}</S.Content>
    </S.AppLayout>
  );
}
