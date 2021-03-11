
exports.min = function min (array) {
  if(array == undefined || !array.length ){
    return 0;
  }
  let min;
  array.map(el=>{
    if(min > el || !min){
      min = el;
    }
  })
  return min;
}

exports.max = function max (array) {
  if(array == undefined || !array.length ){
    return 0;
  }
  let max;
  array.map(el=>{
    if(max < el || !max){
      max = el;
    }
  })
  return max;
}

exports.avg = function avg (array) {
  if(array == undefined || !array.length ){
    return 0;
  }
  let sum = array.reduce((a,b)=>{
    return a+b;
  },0);

  return sum/array.length;
}
