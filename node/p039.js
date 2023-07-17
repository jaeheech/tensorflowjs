const tf = require("@tensorflow/tfjs");
const t0 = tf.scalar(3.14);
t0.print(1);
const t1 = tf.tensor1d([1, 2, 3]);
t1.print(true); //(true == 1)
//dtype: float32
//   rank: 1;
//   shape: [3];
//   values: [1, 2, 3];
//   const t2 = tf.tensor2d([1, 2, 3, 4], [2, 2]);
const t2 = tf.tensor2d([
  [1, 2],
  [3, 4],
]);
t2.print(true);
const t22 = tf.tensor2d([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
t22.print(true);
//   const t3 = tf
//     .tensor3d([
//       [[1], [2]],
//       [[3], [4]],
//     ])
//     .print();
const t3 = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]).print();
const t33 = tf.tensor3d([
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ],
  [
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],
]);
t33.print(true);

//   const arr1 = [];
//   for (let i = 0; i < 27; i++) {
//     arr1.push(i + 1);
//   }
const arr1 = [];
Array(27)
  .fill(0)
  .reduce((v, i) => {
    arr1.push(i + 1);
  }, []);
const tt3 = tf.tensor3d(arr1, [3, 3, 3]);
tt3.print(true);
