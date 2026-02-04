export function getRandomElements(arr, n) {
  let result = [...arr];
  for (let i = result.length - 1; i > result.length - 1 - n; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // Swap
  }
  return result.slice(-n);
}

export function shuffleArray(array){
    return array.map(item =>({value: item, sort: Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(({value}) => value);
}
