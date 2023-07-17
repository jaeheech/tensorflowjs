const tf = require("@tensorflow/tfjs");
const prt = console.log;
const t1 = tf.tensor1d([1, 2, 3]);
prt(tf.memory());
// tidy 는 함수안의 할당된 메모리를 모두 해제
const rt = tf.tidy(() => {
  return t1.log().square().round();
});
console.log(rt);
t1.dispose();
prt(tf.memory());
