
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    array.sort(function(a, b) {
      return a - b
    })
    return array[0]
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    array.sort(function(a, b) {
      return b - a
    })
    return array[0]
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    let sum = 0;
    array.forEach(element => {
      sum += element
    });
    return (sum / array.length)
  }
}
