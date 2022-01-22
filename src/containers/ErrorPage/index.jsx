import React from "react";
import AppLayout from "components/AppLayout";
import * as S from "./styled";
import ImageNotFound from "images/image-not-found.webp";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <AppLayout>
      <S.WrapNotFoundPage>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img src={ImageNotFound} alt="" />
            <div className="d-flex justify-content-center">
              <Button isBlue isHover padding="10px 20px" onClick={handleClick}>
                Về Trang Chủ{" "}
              </Button>
            </div>
          </div>
        </div>
      </S.WrapNotFoundPage>
    </AppLayout>
  );
}
