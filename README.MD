# chương trình xổ số

Chương trình xổ số họp thường niên, xổ số soi cầu 3D, hỗ trợ cấu hình thông tin dự thưởng, `Excel` nhập thông tin nhân sự xổ số,` Excel` xuất kết quả xổ số

Nếu chương trình này hữu ích với bạn 😎😎😎, tôi hy vọng sẽ cho một ⭐ ** sao ** ⭐. 😘😘😘😍🥰🎉🎈🎃

> Hãy thử ngay bây giờ: [https://moshang-xc.github.io/lottery/](https://moshang-xc.github.io/lottery/)

## Công nghệ

Công nghệ: Node + Express + Three.js

Chương trình phụ trợ được thực hiện thông qua `Express`

Giao diện xổ số phía trước thực hiện các quả bóng xổ số 3D thông qua `Three.js`, trích dẫn ví dụ 3D chính thức của` Three.js`

## Mô tả chức năng:

1. Bạn có thể lưu kết quả xổ số và tải xuống để vượt trội trong thời gian thực🎉
2. Những người đã được rút thăm không tham gia vào buổi vẽ, và những người đã được vẽ có thể được vẽ lại nếu họ không có mặt tại chỗ 🎁
3. Làm mới hoặc tắt máy chủ sẽ lưu dữ liệu đã trích xuất hiện tại và không đặt lại dữ liệu. Chỉ bằng cách nhấp vào nút đặt lại trên giao diện, dữ liệu xổ số mới có thể được đặt lại 🧧
4. Số lượng giải thưởng được rút ra mỗi lần có thể được cấu hình 🎈
5. Sau khi tất cả các giải thưởng đã được rút ra, bạn có thể tiếp tục rút thăm các giải đặc biệt (ví dụ: rút bao lì xì ngay bây giờ, các giải thưởng bổ sung, v.v.), tại thời điểm này, theo mặc định, mỗi lần rút thăm

## xem trước

![lottery.gif](https://raw.githubusercontent.com/moshang-xc/blog/master/share/lottery.gif)

![index.jpg](https://raw.githubusercontent.com/moshang-xc/blog/master/share/index.jpg)

![start.jpg](https://raw.githubusercontent.com/moshang-xc/blog/master/share/start.jpg)

![end.jpg](https://raw.githubusercontent.com/moshang-xc/blog/master/share/end.jpg)

## Cài đặt

```
git clone https://github.com/moshang-xc/lottery.git

cd lottery

# Cài đặt plugin máy chủ
cd server
npm install

# Cài đặt plugin front-end
cd ../product
npm install

# Build
npm run build

# Run
npm run serve

# Chạy với dev
npm run dev

```

## Cấu trúc thư mục

```
Lottery
├── product
│   ├── src
│   │   ├── lottery
│   │   │   └── index.js
│   │   ├── lib
│   │   ├── img
│   │   ├── css
│   │   └── data
│   ├── package.json
│   └── webpack.config.js
├── server
│   ├── config.js
│   ├── server.js
│   └── package.js
```

> 1. sản phẩm là thư mục trang đầu tiên
> 2. tệp cấu hình dự án web package.josn
> 3. Tệp cấu hình đóng gói webpack.config.js
> 4. máy chủ là thư mục máy chủ
> 5. config là tập tin cấu hình thông tin giải thưởng

## Thông tin cấu hình

### Cấu hình Thông tin Người dùng Xổ số

Thông tin người dùng xổ số nằm trong tệp ** `server /data/user.xlsx` **, được điền theo định dạng tệp, không thể sửa đổi tên tệp và tiêu đề cột

### Cấu hình Thông tin Giải thưởng

Thông tin cấu hình của giải thưởng được điền vào tệp ** server / config.js **, không thể sửa đổi tên tệp.

** Mô tả cấu hình các giải thưởng như sau: **

| tham số | kiểu giá trị | mô tả                                                                                                         |
| ------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| loại    | Số           | Loại giải, định danh duy nhất, 0 là phần giữ chỗ cho giải đặc biệt mặc định, các giải khác không được sử dụng |
| đếm     | Số           | Số giải                                                                                                       |
| text    | String       | Tên giải thưởng                                                                                               |
| tiêu đề | Chuỗi        | Mô tả giải thưởng                                                                                             |
| img     | String       | Địa chỉ giải thưởng, bức tranh có trong thư mục ** img **                                                     |

```js
// Thông tin giải thưởng, vật phẩm đầu tiên được bảo lưu và không thể sửa đổi, các vật phẩm khác có thể sửa đổi khi cần
let prizes = [{
        type: 0,
        count: 1000,
        title: "",
        text: "Giải đặc biệt"
    },
    {
        type: 1,
        count: 2,
        text: "Giải thưởng lớn",
        title: "Món quà bí mật",
        img: "../img/secrit.jpg"
    },
    {
        type: 2,
        count: 5,
        text: "Giải nhất",
        title: "Mac Pro",
        img: "../img/mbp.jpg"
    }
    ...
];
```

### Cấu hình số lượng giải thưởng rút thăm mỗi lần

** EACH_COUNT ** được sử dụng để định cấu hình số lần rút thăm mỗi lần, tương ứng với các giải thưởng một đối một. Ví dụ: cấu hình số lần rút thăm tương ứng với cấu hình giải thưởng ở trên như sau:

` ` js
const EACH_COUNT = [1, 1, 5];
`` '

Cấu hình trên có nghĩa là thứ tự số lượng các giải thưởng trong một lần quay là: mỗi lần quay một giải đặc biệt, mỗi lần quay một giải đặc biệt và mỗi lần quay năm giải nhất.

### Cấu hình Nhận dạng Doanh nghiệp

Logo này được sử dụng để hiển thị trên thẻ rút thăm.

` ` js
const COMPANY = "MoShang";
`` '

## Giấy phép

MIT
