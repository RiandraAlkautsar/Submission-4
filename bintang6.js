
   var row = 5;
   for(var i = 1; i <= row; i++){
     var bintang = "            ";
     for(var j =1; j <= i; j++){
       bintang += " ";
     }
     for(var k =i; k <= row; k++){
       bintang += "*";
     }
     console.log(bintang);
   }