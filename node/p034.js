const tf = require("@tensorflow/tfjs");
//   console.log(tf)
const model = tf.sequential(); //1. 순차적 API 모델
model.add(tf.layers.dense({ units: 1, inputShape: [2] })); //2. 레이어 생성 및 추가 , inputshape : 인풋 모양, units : 다음엣지로 전달될 갯수
model.compile({ loss: "meanSquaredError", optimizer: "adam" }); //3. 로스함수와 옵티마이져 , 경험적 선택

// 4. 데이터를 텐서로 변환
const xs = tf.tensor2d(
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
  [4, 2]
);
const ys = tf.tensor2d([0, 1, 1, 0], [4, 1]);

// 5. 모델을 핏하기
model.fit(xs, ys).then(() => {
  model.predict(tf.tensor2d([[0, 1]], [1, 2])).print(); // 6. 예측하기
});
