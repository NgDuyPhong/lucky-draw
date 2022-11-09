/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "Giải đặc biệt",
  },
  {
    type: 1,
    count: 2,
    text: "Giải thưởng lớn",
    title: "Quà tặng bí ẩn",
    img: "../img/secrit.jpg",
  },
  {
    type: 2,
    count: 5,
    text: "Giải nhất",
    title: "Mac Pro",
    img: "../img/mbp.jpg",
  },
  {
    type: 3,
    count: 6,
    text: "Giải nhì",
    title: "Điện thoại Mate30",
    img: "../img/huawei.png",
  },
  {
    type: 4,
    count: 7,
    text: "Giải ba",
    title: "Ipad Mini5",
    img: "../img/ipad.jpg",
  },
  {
    type: 5,
    count: 8,
    text: "Giải tư",
    title: "Máy bay không người lái DJI",
    img: "../img/spark.jpg",
  },
  {
    type: 6,
    count: 8,
    text: "Giải năm",
    title: "Kindle",
    img: "../img/kindle.jpg",
  },
  {
    type: 7,
    count: 11,
    text: "Giải sáu",
    title: "Tai nghe Bluetooth Edifier",
    img: "../img/edifier.jpg",
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 5, 6, 7, 8, 9, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "MoShang";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY,
};
