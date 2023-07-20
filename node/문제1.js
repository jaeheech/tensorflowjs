const tf = require("@tensorflow/tfjs");
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [2] }));
model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));
model.compile({ loss: "meanSquaredError", optimizer: "adam" });
// 4. 데이터를 텐서로 변환
const xs = tf.tensor2d(
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
  ],
  [4, 2]
);
const ys = tf.tensor2d([0, 0, 0, 1], [4, 1]);

const fitParm = {
  batchSize: 32, // Number of samples per gradient update. If unspecified, it will default to 32.
  epochs: 5000,
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      console.log("epoch", epoch, logs, "RMSE=>", Math.sqrt(logs.loss));
    },
  },
};

model.fit(xs, ys, fitParm).then(() => {
  model.predict(tf.tensor2d([[1, 0]], [1, 2])).print(true);
});
