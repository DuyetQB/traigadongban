import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import ButtonArrow from 'components/ButtonArrow';
import { Heading2, Heading3, Text } from 'components/common/Text';
import IconArrowRight from 'images/icon-long-arrow-right.png';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Banner() {
  const [isShow, setIsShow] = useState(false);
  const [dataArticle, setDataArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const hansleShow = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    const getArticlePost = async () => {
      try {
        const response = await axios.get('https://60b1dcdf62ab150017ae1584.mockapi.io/demo/traiga/');

        setDataArticle(response.data);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    };
    getArticlePost();
  }, []);

  return (
    <div className="container">
      {/* <Skeleton height={100} duration={2} />
      <Skeleton count={5} duration={2} height={100} /> */}

      {isShow && (
        <S.WrapNotification>
          <Heading3 padding="20px 0px">
            Trang web trại gà của chúng tôi đang cập nhật và nâng cấp . Cảm ơn khách hàng đã ghé thăm{' '}
          </Heading3>
          <S.Video src="https://media.flaticon.com/dist/min/img/video/sad/video.mp4" loop autoPlay muted></S.Video>
          <S.IconClose onClick={() => hansleShow()}>
            <i className="fa fa-close"></i>
          </S.IconClose>
        </S.WrapNotification>
      )}
      <S.WrapArticle>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="30px">
                Các bài viết và thủ thuật hữu ích
              </Heading2>
              <Text isGrey>
                Đọc những bài viết về cách nuôi gà , chọn gà chọi như thế nào , cách làm những món ăn ngon từ gà , cách
                nhận biết gà Asil Thái Lan .
              </Text>
            </S.WrapText>
          </div>
          <div className="col-md-12">
            <S.WrapArticleItem>
              <div className="row">
                {dataArticle.map((item) => (
                  <div className="col-md-4" key={item.id}>
                    <S.ArticleItem>
                      <Link to={`/article/${item.id}`}>
                        {loading ? (
                          <Skeleton width="100%" height={300} duration={2000} />
                        ) : (
                          <S.ArticleItemImage src={item.avatar} alt="" />
                        )}
                      </Link>
                      {loading ? (
                        <Skeleton width={200} height={30} duration={2000} />
                      ) : (
                        <Heading3 weight="700" mt="20px">
                          {item.title}
                        </Heading3>
                      )}
                      {loading ? (
                        <Skeleton width={260} height={60} duration={2000} />
                      ) : (
                        <Text mt="20px" $truncate>
                          {item.details}
                        </Text>
                      )}
                      {loading ? (
                        <Skeleton width={120} height={20} duration={2000} />
                      ) : (
                        <Link to={`/article/${item.id}`}>
                          <div className="d-flex align-items-center">
                            <Text margin="0px 10px 0px 0px" weight="700">
                              Read more
                            </Text>
                            <img src={IconArrowRight} alt="" style={{ width: '30px' }} />
                          </div>
                        </Link>
                      )}
                    </S.ArticleItem>
                  </div>
                ))}
              </div>
            </S.WrapArticleItem>
          </div>
        </div>
        <S.SeeAllMenu>
          <ButtonArrow btntext="Xem tất cả" right="unset" padding="10px 21px" shadow />
        </S.SeeAllMenu>
      </S.WrapArticle>
    </div>
  );
}
