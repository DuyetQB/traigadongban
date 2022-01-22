import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import { Heading2 } from "components/common/Text";

export default function Admin() {
  const Navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("accessToken");
    Navigate("/login");
  };

  return (
    <div className="container">
      <Heading2 padding="30px 0px">Admin page</Heading2>
      <Button onClick={Logout} padding="10px 20px" isBlue isHover>
        Logout
      </Button>
    </div>
  );
}
