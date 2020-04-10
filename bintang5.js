
   var row = 5;
for(var i = 1; i <= row; i++){
  var bintang = "            ";
  for(var j =i; j <= row; j++){
    bintang += " ";
  }
  for(var k =1; k <= i; k++){
    bintang += "*";
  }
  console.log(bintang);
}