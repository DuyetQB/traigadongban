import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "store/ContextApi";
import { useNavigate } from "react-router-dom";
import ButtonNormal from "components/Button";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  const Navigate = useNavigate();

  const handleDirectToHome = () => {
    Navigate("/");
  };
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="cart" style={{ padding: "20px" }}>
      <ButtonNormal
        onClick={handleDirectToHome}
        isBlue
        isHover
        padding="10px 20px"
        margin="10px"
      >
        Về Trang Chủ
      </ButtonNormal>
      <div className="container">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}> {prod.price} .vnd</Col>

                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Tổng sản phẩm ({cart.length}) sản phẩm </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          Tổng tiền : {total} {".000"}.vnd
        </span>
        <Button
          type="button"
          disabled={cart.length === 0}
          style={{ margin: "10px" }}
        >
          Kiểm tra tiến độ
        </Button>
      </div>
    </div>
  );
};

export default Cart;
