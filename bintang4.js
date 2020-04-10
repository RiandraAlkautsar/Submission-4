var row = 4;
for(var i = 0; i <= row; i++){
  var bintang = "            ";
  for(var j = 0; j <= i; j++){
    bintang += " ";
  }
  for(var k = row*2; k >= i*2; k--){
    bintang += "*";
  }
  console.log(bintang);
}