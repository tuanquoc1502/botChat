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
    messageUser: "menu",
    messageBot: `Đây là menu danh sách các loại gạo của công ty, mời bạn tham khảo?`,
    menus: ["Item #1", "Item #2", "Tests #3", "Ornn #4"],
  },
  {
    messageUser: "ảnh",
    messageBot:
      "Mời bạn xem ảnh các loại gạo bên chúng tôi và lựa chọn, nếu bạn mua từ 2kg trở lên sẽ được giảm 10% đó ạ!",
    url_img: [
      "https://media.thuonghieucongluan.vn/resize_640x360/uploads/2020/11/10/gao-1604966905.jpg",
      "http://media.doisongphapluat.com/529/2018/12/18/gao-viet-nam.jpg",
      "https://vtv1.mediacdn.vn/zoom/700_438/2020/9/19/gao-viet-nam-1-16004985565981631798792.jpg",
    ],
  },
];
