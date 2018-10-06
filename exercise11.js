function tentukanDeretAritmatika(arr) {
    var selisihDeret2 = arr[1] - arr[0];
    var deretAritmatika = true;
    //console.log(selisihDeret);
    for(var i = 1; i < arr.length -1; i++) {
      //console.log(arr[i+1]-arr[i]);
      var selisihDeret1 = arr[i+1]-arr[i];
      if(selisihDeret1 !== selisihDeret2) {
        deretAritmatika = false;
      }
    }
    return deretAritmatika;
  }
  
  
  
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6]));
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24]));
  console.log(tentukanDeretAritmatika([2, 4, 6, 8]));
  console.log(tentukanDeretAritmatika([2, 6, 18, 54]));
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9]));
