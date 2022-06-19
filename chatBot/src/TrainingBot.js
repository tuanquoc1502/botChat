import { account } from "./constant";
export const searchLibaryMessage = [
  {
    messageUser: "xin chào",
    messageBot: `Chào ${account?.user_name}, tôi có thể giúp gì cho bạn ?`,
  },
  {
    messageUser: "hello",
    messageBot: `Chào ${account?.user_name}, tôi có thể giúp gì cho bạn ?`,
  },
  {
    messageUser: "mua gạo",
    messageBot: "Bạn muốn mua gạo gì ? Chỗ tôi có những loại gạo sau",
    url_img:
      "https://media.thuonghieucongluan.vn/resize_640x360/uploads/2020/11/10/gao-1604966905.jpg",
  },
  {
    messageUser: "giá gạo tám thơm",
    messageBot: "Hiện tại gạo tám thơm bên tôi đang bán với giá 180.000đ ?",
  },
];
