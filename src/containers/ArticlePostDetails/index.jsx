import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "components/AppLayout";
import { Heading2, Text } from "components/common/Text";
import axios from "axios";
import * as S from "./styled";

function ArticlePostDetails() {
  const [user, setUser] = useState([]);
  let { userId } = useParams();

  useEffect(() => {
    const handleGetUser = async () => {
      try {
        const post = await axios.get(
          `https://60b1dcdf62ab150017ae1584.mockapi.io/demo/traiga/${userId}`
        );
        console.log("post", post.data);
        setUser(post.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleGetUser();
  }, [userId]);

  //   check emty obj
  const isEmtyObj = Object.keys(user).length === 0;

  return (
    <AppLayout>
      <div style={{ padding: "140px 0px" }}>
        {isEmtyObj === false && (
          <div style={{ textAlign: "center" }}>
            <Heading2 padding="30px 0px">{user.title}</Heading2>
            <S.ImageDetails src={user.avatar} />
            <div className="row justify-content-center">
              <div className="col-md-8">
                <Text size="20px" mt="20px">
                  {user.details}
                </Text>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
export default ArticlePostDetails;
