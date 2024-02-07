// データセット
const dataset =  [
  {
    teamNumbers: 2,
    teamScores: [123, 4567]
  },
  {
    teamNumbers: 3,
    teamScores: [2024, 2020, 2023]
  }, {
    teamNumbers: 5,
    teamScores: [2020, 2020, 2021, 2024, 2026]
  }
];

const myFunction = (arg) => {
  // ここに処理を書く
  let currentMax = {
    index: 0,
    value: arg.teamScores[0]
  };
  for (let i = 1; i < arg.teamScores.length; i++) {
    if (currentMax.value < arg.teamScores[i]) {
      currentMax.index = i;
      currentMax.value = arg.teamScores[i];
    }
  }
  return currentMax.index;
}
myFunction(dataset[0]);

const showResult = (myFunction) => {
  const answers = [1,3,4,2,7,2];
  let isResult = true;
  for (let i = 0; i < dataset.length; i++) {
    const resultMyFunction = myFunction(dataset[i]);
    if(answers[i] !== resultMyFunction) isResult = false;
    console.log(`テストケース ${i + 1} ... 期待値：${answers[i]}, 実際の値: ${resultMyFunction}`);
  }
  console.log("実行結果： ", isResult ? '正解' : '不正解')
}
showResult(myFunction);