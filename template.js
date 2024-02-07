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
  // console.log('hi');
}

const resultjudge = (myFunction) => {
  const answers = [1,3,4,2,7,2];
  let isResult = true;
  for (let i = 0; i < dataset.length; i++) {
    const resultMyFunction = myFunction(dataset[i]);
    if(answers[i] !== resultMyFunction) isResult = false;
    console.log(`テストケース ${i + 1} ... 期待値：${answers[i]}, 実際の値: ${resultMyFunction}`);
  }
  console.log("実行結果： ", isResult ? '正解' : '不正解')
}
resultjudge(myFunction);