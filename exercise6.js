function angkaPalindrome(num) {
  for (var i = 0; i < num; i++){
      num++
     
      var numString = String(num);
      var k = numString.length;
      var string = '';
      for (var j = k - 1; j >= 0; j--){
        string += numString[j];
       
      }
      if(numString === string){
        return num
      }
    }
}



console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));