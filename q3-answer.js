// 与えられた引数の中から最大値のインデックスを返す関数を作成してください。
// 例えば、引数が[3,5]の場合、5が最大値なので1を返します。引数が[100,50,30]の場合、100が最大値なので0を返します。
// 現在のコードは、最大値のインデックスを返すのではなく、最大値の値を返してしまっています。コードを修正してください。

const findMaxValue = (arg) => {
  // ここに処理を書く
  let currentMax = arg[0];

  for (let i = 1; i < arg.length; i++) {
    if (currentMax < arg[i]) {
      currentMax = arg[i];
    }
  }
  console.log(currentMax);
}

findMaxValue([3,5]); // 期待値：1
findMaxValue([100,50,30]); // 期待値：0
findMaxValue([0,300,8,15,1000,1]); // 期待値：4