const tf = require("@tensorflow/tfjs");
const t = tf.tensor1d([1, 2, 3]);

// 비동기 API
// t.data((d) => {
//   console.log(d);
// });
const t1p = t.data();
console.log(t1p);

//동기 API
console.log(t.dataSync());
