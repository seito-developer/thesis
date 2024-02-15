const findMaxValue = (arg) => {
  // ここに処理を書く
  let currentMax = {
    index: 0,
    value: arg[0]
  };

  for (let i = 1; i < arg.length; i++) {
    if (currentMax.value < arg[i]) {
      currentMax.index = i;
      currentMax.value = arg[i];
    }
  }
  console.log(currentMax.index);
}
findMaxValue([3,5]); // 1
findMaxValue([100,50,30]); // 0
findMaxValue([0,300,8,15,1000,1]); // 4