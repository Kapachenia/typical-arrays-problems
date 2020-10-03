exports.min = function min (array) {  
  if ( array == null || array.length === 0 ) {
  return 0;
  } else {
    let resultMin = Math.min.apply(null, array);
  return resultMin; 
  }
}

exports.max = function max (array) {
  if (array == null || array.length === 0) {
    return 0;
  } else {
    let resultMax = Math.max.apply(null, array);
  return resultMax;
  }
}

exports.avg = function avg (array) {
  if (array == null || array.length === 0) {
  return 0;
  } else {
    let resultAvg;
  let sum = 0;
  for (let i = 0; i< array.length; i++) {
    sum += array[i];
  }
  return resultAvg = (sum / array.length);
  }
}
