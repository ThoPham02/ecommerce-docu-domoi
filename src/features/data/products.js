const productsDB = [
  {
    id: 1,
    name: "Samsung A33 Hàng cty",
    imgUrl: "images/products/1.jpg",
    price: 4100000,
    discription: "Máy zin",
    address: "Nam Từ Liêm",
    tag: "Đồ điện tử",
    amount: 1,
    status: "Đang bán",
    userId: 1,
  },
  {
    id: 2,
    name: "IPhone 7Plus 128GB",
    imgUrl: "images/products/2.jpg",
    price: 2500000,
    discription: "Máy đẹp zin pin 90%",
    address: "Nam Từ Liêm",
    tag: "Đồ điện tử",
    amount: 1,
    status: "Đang bán",
    userId: 2,
  },
  {
    id: 3,
    name: "Iphone 11 pro",
    imgUrl: "images/products/3.jpg",
    price: 9900000,
    discription: "màu trắng zin đẹp pin 94%",
    address: "Ha Noi",
    tag: "Đồ điện tử",
    amount: 1,
    status: "Đang bán",
    userId: 3,
  },
  {
    id: 4,
    name: "Iphone XSM",
    imgUrl: "images/products/4.jpg",
    price: 4500000,
    discription: "lock face đầy đủ pin zin 84%",
    address: "Ha Noi",
    tag: "Đồ điện tử",
    amount: 1,
    status: "Đang bán",
    userId: 4,
  },
  {
    id: 5,
    name: "Iphone 7",
    imgUrl: "images/products/5.jpg",
    price: 2300000,
    discription:
      "Màu Vàng , vỏ đẹp , bộ nhớ 128gb , Pin 100% về chỉ viêc cắm sim dùng có sạc",
    address: "Ha Noi",
    tag: "Đồ điện tử",
    amount: 1,
    status: "Đang bán",
    userId: 5,
  },
  {
    id: 6,
    name: "RAM 8GB 2666 ",
    imgUrl: "images/products/6.jpg",
    price: 400000,
    discription: "bh 2 năm tới t12.2023",
    address: "Ha Noi",
    tag: "Đồ điện tử",
    amount: 1,
    status: "Đang bán",
    userId: 6,
  },
  {
    id: 7,
    name: "Latop GF63 i5 11400F",
    imgUrl: "images/products/7.jpg",
    price: 16500000,
    discription: "card rtx 3050Ti HĐ 512GB RAM 16GB Mua đúng 1 tuần ko tg chơi",
    address: "Ha Noi",
    tag: "Đồ điện tử",
    amount: 1,
    status: "Đang bán",
    userId: 7,
  },
  {
    id: 8,
    name: "Quạt cây",
    imgUrl: "images/products/8.jpg",
    price: 80000,
    discription: "Quạt dùng 3 tháng",
    address: "142 Cổ Nhuế",
    tag: "Đồ gia dụng",
    amount: 1,
    status: "Đang bán",
    userId: 8,
  },

  {
    id: 9,
    name: "Nồi cơm điện",
    imgUrl: "images/products/9.jpg",
    price: 100000,
    discription: "Mới dùng 1 tháng",
    address: "375 Cổ Nhuế",
    tag: "Đồ gia dụng",
    amount: 1,
    status: "Đang bán",
    userId: 9,
  },

  {
    id: 10,
    name: "Bộ sofa đã qua sử dụng",
    imgUrl: "images/products/10.jpg",
    price: 750000,
    discription: "đã sử dụng 7 tháng cần pass lại cho ai cần",
    address: "Ecohome",
    tag: "Đồ gia dụng",
    amount: 1,
    status: "Đang bán",
    userId: 10,
  },

  {
    id: 11,
    name: "Ấm siêu tốc",
    imgUrl: "images/products/11.jpg",
    price: 45000,
    discription: "",
    address: "46 đức thắng",
    tag: "Đồ gia dụng",
    amount: 1,
    status: "Đang bán",
    userId: 1,
  },

  {
    id: 12,
    name: "20 móc quần áo",
    imgUrl: "images/products/12.jpg",
    price: 30000,
    discription: "Mới chưa qua sử dụng",
    address: "72 bờ Tây sông nhuệ",
    tag: "Đồ gia dụng",
    amount: 1,
    status: "Đang bán",
    userId: 11,
  },

  {
    id: 13,
    name: "Bộ bát kèm chậu",
    imgUrl: "images/products/13.jpg",
    price: 20000,
    discription: "Chuyển trọ cần pass nhanh",
    address: "Ha Noi",
    tag: "Đồ gia dụng",
    amount: 1,
    status: "Đang bán",
    userId: 12,
  },

  {
    id: 14,
    name: "Đồ đựng rác",
    imgUrl: "images/products/14.jpg",
    price: 10000,
    discription: "pass nhanh",
    address: "Ha Noi",
    tag: "Đồ gia dụng",
    amount: 1,
    status: "Đang bán",
    userId: 13,
  },

  {
    id: 15,
    name: "Bộ bàn ghế",
    imgUrl: "images/products/15.jpg",
    price: 200000,
    discription: "chuyển trọ cần pass lại",
    address: "Ha Noi",
    tag: "Đồ gia dụng",
    amount: 1,
    status: "Đang bán",
    userId: 14,
  },
  {
    id: 16,
    name: "Máy giặt 8kg",
    imgUrl: "images/products/16.jpg",
    price: 800000,
    discription: "",
    address: "Ha Noi",
    tag: "Tủ lạnh, Máy giặt",
    amount: 1,
    status: "Đang bán",
    userId: 15,
  },

  {
    id: 17,
    name: "Tủ lanh Beko",
    imgUrl: "images/products/17.jpg",
    price: 100000,
    discription: "Tiết kiệm điện , mới sử dụng 3 tháng ",
    address: "Cổ nhuế",
    tag: "Tủ lạnh, Máy giặt",
    amount: 1,
    status: "Đang bán",
    userId: 16,
  },

  {
    id: 18,
    name: "Tủ lạnh sanyo 123 Lit",
    imgUrl: "images/products/18.jpg",
    price: 1200000,
    discription: "Chuyển trọ cần pass nhanh",
    address: "Ecohome",
    tag: "Tủ lạnh, Máy giặt",
    amount: 1,
    status: "Đang bán",
    userId: 17,
  },

  {
    id: 19,
    name: "Tủ lạnh Sam.sung inverter 243l( còn bào hành hảng)",
    imgUrl: "images/products/19.jpg",
    price: 2700000,
    discription: "Siêu tiết kiệm điện",
    address: "Ha Noi",
    tag: "Tủ lạnh, Máy giặt",
    amount: 1,
    status: "Đang bán",
    userId: 18,
  },

  {
    id: 20,
    name: "Máy giặt Aqua inverter 8kg",
    imgUrl: "images/products/20.jpg",
    price: 2000000,
    discription: "máy mới dùng còn bảo hành",
    address: "Ha Noi",
    tag: "Tủ lạnh, Máy giặt",
    amount: 1,
    status: "Đang bán",
    userId: 19,
  },

  {
    id: 21,
    name: "Cần pass tủ lạnh",
    imgUrl: "images/products/21.jpg",
    price: 800000,
    discription: "Chuyển trọ cần pass nhanh",
    address: "Ha Noi",
    tag: "Tủ lạnh, Máy giặt",
    amount: 1,
    status: "Đang bán",
    userId: 20,
  },

  {
    id: 22,
    name: "Máy giặt",
    imgUrl: "images/products/22.jpg",
    price: 1000000,
    discription: "còn mới",
    address: "Ha Noi",
    tag: "Tủ lạnh, Máy giặt",
    amount: 1,
    status: "Đang bán",
    userId: 21,
  },
  {
    id: 23,
    name: "Máy in canon LBP 2900 cũ ",
    imgUrl: "images/products/23.webp",
    price: 2200000,
    discription: "Loại máy in: máy in laser đen trắng A4 Tốc độ in: 12 trang/phútCổng kết nối: USB Hộp mực: 303 (2.000 trang) Tình trạng: Máy mới >90%, cơ êm Kiểu dáng nhỏ gọn, in cực đẹp Mực in, linh kiện thông dụng giá rẻ Bảo hành: 6 tháng (Phần tiêu hao: mực, sấy BH 3 tháng)",
    address: "Ha Noi",
    tag: "Đồ dùng văn phòng",
    amount: 1,
    status: "Đang bán",
  },
  {
    id: 24,
    name: "Máy in đa chức năng Canon MF235 (in-scan-copy-fax)",
    imgUrl: "images/products/24.webp",
    price: 3000000,
    discription: " Loại máy in: laser đen trắng Chức năng: Print/ Copy/ Scan/ Fax Khổ giấy: A4/A5  Tốc độ: 23 trang/ phút  Độ phân giải : 1200 x 1200 dpi In đảo mặt: Không Cổng giao tiếp: USB Dùng mực: Canon 337 kèm theo máy Tình trạng: Chính hãng, mới 100%  Bảo hành: 12 tháng ",
    address: "Cổ nhuế",
    tag: "Đồ dùng văn phòng",
    amount: 1,
    status: "Đang bán",
    userId: 21,
  },
  
  {
    id: 25,
    name: "Máy quét Fujitsu IX100 PA03688-B001",
    imgUrl: "images/products/25.jpg",
    price: 3000000,
    discription: "Khổ giấy: A4/A5Scan hai mặt: Không Cổng giao tiếp: USBĐộ sâu màu sắc: 48 Bit",
    address: "Ha Noi",
    tag: "Đồ dùng văn phòng",
    amount: 1,
    status: "Đang bán",
    userId: 21,
  },
  
  {
    id: 26,
    name: "Bàn phím A4tech KR-90 (USB, Có dây)",
    imgUrl: "images/products/26.jpg",
    price: 270000,
    discription: "Kiểu kết nối: Có dâyChuẩn giao tiếp: USBPhím chức năng: StandardMàu: Đen",
    address: "Ha Noi",
    tag: "Đồ dùng văn phòng",
    amount: 1,
    status: "Đang bán",
    userId: 21,
  },
  {
    id: 27,
    name: "Thanh Lý Áo Phông Chính Hãng Levis ",
    imgUrl: "images/products/27.jpeg",
    price: 170000,
    discription: "Dọn tủ cho rộng rãi thanh lý mấy cái phông không cổ chính hãng levis . Mới mua đầu hè còn khá mới .Áo sản xuất tại nhật .Áo size M .Fom slim fit ( ôm ôm) Dành cho người 1m63 đến 1m75.Nặng 63 đến 75kg.Áo chất 100% cotton và dòng cao cấp của Hãng nên Mặc rất thoáng và mát và rất thích .Cam kết chính hãng sai mình đền",
    address: "Ha Noi",
    tag: "Thời trang Đồ dùng cá nhân",
    amount: 1,
    status: "Đang bán",
    userId: 21,
  },
  
  {
    id: 28,
    name: "Pass giày Keds chính hãng",
    imgUrl: "images/products/28.jpg",
    price: 300000,
    discription: "Mua chính hãng, giày dáng ôm nên bị chật.Keds Triple Black chính hãng, size 39 (dáng ôm vừa 38, 38.5, 39 chân gầy)New 99% full box, mua giá sale 795k pass 300k (có fix)",
    address: "Ha Noi",
    tag: "Thời trang Đồ dùng cá nhân",
    amount: 1,
    status: "Đang bán",
    userId: 21,
  },
  
  {
    id: 29,
    name: "Pass giày",
    imgUrl: "images/products/29.jpeg",
    price: 300000,
    discription: "cần pass đôi vans rep 1:1 size 38 mới đi 2 lần do bị rộng",
    address: "Ha Noi",
    tag: "Thời trang Đồ dùng cá nhân",
    amount: 1,
    status: "Đang bán",
    userId: 21,
  },
  
  {
    id: 30,
    name: "Sưu Tầm Hiếm Automatic Made In Japan mới 99% chỉ sx trong nước Nhật",
    imgUrl: "images/products/30.jpg",
    price: 1200000,
    discription: "ĐH Sưu Tầm Hiếm Tự Động Automatic Made In Japan Mới 99% ( Like new như mới ) chỉ sx trong nước Nhật vàchỉ bán trong nộii địa người dân Nhật sử dụng , Chạy máy Y675A thuộc dòng máy 7S của nhà Seiko ,thương hiệu SII O ra đời vào năm 1937 chỉ sx đồng hồ cho người Nhật trong nước nên chất lượng thì siêu bền ",
    address: "Ha Noi",
    tag: "Thời trang Đồ dùng cá nhân",
    amount: 1,
    status: "Đang bán",
    userId: 21,
  },
];

export default productsDB;