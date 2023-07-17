const tf = require("@tensorflow/tfjs");
const log = console.log;
log(tf.memory());
const a = tf.tensor2d([
  [1, 2],
  [3, 4],
]);
const b = tf.tensor2d([5, 6, 7, 8], [4, 1]);
log(tf.memory());
a.dispose();
log(tf.memory());
