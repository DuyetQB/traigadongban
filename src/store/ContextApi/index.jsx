import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "../Reducers";

const Cart = createContext();

// const product = [
//   {
//     id: 1,
//     name: "ga loai 1",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/c/c1/M%E1%BB%99t_con_g%C3%A0_tr%E1%BB%91ng_Li%C3%AAn_Minh.jpg",
//     price: 300,
//   },
//   {
//     id: 2,
//     name: "ga loai 2",
//     image: "https://kenhphunu.com/media/102015/1502730000/conga.jpg",
//     price: 500,
//   },
//   {
//     id: 3,
//     name: "ga loai 3",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/5/58/Rhode_Island_Red_Rooster2.JPG",
//     price: 350,
//   },
//   {
//     id: 4,
//     name: "ga loai 4",
//     image:
//       "https://photo-cms-baonghean.zadn.vn/w607/Uploaded/2021/nkdkswkqoc/201701/original/images1791113_k_t_qu__h_nh__nh_cho_g__tr_ng_g_y_586b7f11dde1a.jpg",
//     price: 370,
//   },
//   {
//     id: 5,
//     name: "ga loai 5",
//     image: "https://wall.vn/wp-content/uploads/2020/02/hinh-anh-con-ga-24.jpg",
//     price: 380,
//   },
//   {
//     id: 6,
//     name: "ga loai 6",
//     image: "https://sachgiai.com/uploads/news/2015_10/con-ga-trong-nha-em.jpg",
//     price: 550,
//   },
// ];

faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log("productState", productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
