var row = 4;

for(var i = 0; i <= row; i++){
  var bintang = "            ";
  for(var j = row; j >= i; j--){
    bintang += " ";
  }
  for(var k = 0; k <= i*2; k++){
    bintang = bintang + "*";
  }
  console.log(bintang);
}