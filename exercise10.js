
function perkalianUnik(arr) {
  var hasil = [];
  for(var i = 0; i < arr.length; i++) {
    var tetap = 1;
    for (var j = 0; j < arr.length; j++) {
      if(j !== i) {
        tetap *= arr[j];
      }
    }
    hasil.push(tetap);
  }
  return hasil;
}


console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5]));
console.log(perkalianUnik([1, 4, 3, 2, 5]));
console.log(perkalianUnik([1, 3, 3, 1]));
console.log(perkalianUnik([2, 1, 8, 10, 2]));