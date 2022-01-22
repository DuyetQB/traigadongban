import React from "react";
import * as S from "./styled";
import { Heading2, Text } from "components/common/Text";
import { Link } from "react-router-dom";
import ImageSupport from "./images/image-support.png";
import AppLayout from "components/AppLayout";
import Input from "components/Form/InputField";
import InputPlaceHolder from "components/Form/InputPlaceHolder";
import Button from "components/Button";

export default function Support() {
  return (
    <AppLayout>
      <S.WrapSupport>
        <div className="row">
          <div className="col-md-12">
            <S.WrapImage>
              <S.ImageSupport src={ImageSupport} alt="image support" />
            </S.WrapImage>
          </div>
          <div className="col-md-5">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="30px">
                Bạn có thể hỗ trợ , đóng góp ý kiến cho chúng tôi!
              </Heading2>
              <Text isGrey margin="20px 0px">
                Nếu bạn có ý tưởng để cải thiện sản phẩm thì hãy cho chúng tôi
                biết nhé. Còn nếu cần trợ giúp để khắc phục vấn đề cụ thể, hãy
                truy cập <Link to="/support">Hỗ Trợ </Link>
              </Text>
            </S.WrapText>
          </div>
          <div className="col-md-5">
            <S.WrapFormSupport>
              <S.Text>Chúng tôi có thể cải thiện như thế nào?</S.Text>
              <Input placeholder="Tiêu đề " />
              <InputPlaceHolder
                text="Chi tiết "
                placeholder="Vui lòng viết chi tiết về vấn đề bạn đang mắc phải... "
              />

              <S.Flexend>
                <Button isBlue padding="10px 20px">
                  Gửi
                </Button>
              </S.Flexend>
            </S.WrapFormSupport>
          </div>
        </div>
      </S.WrapSupport>
    </AppLayout>
  );
}
