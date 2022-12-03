function a(){
    let a = 10;
    function b(){
        console.log(a);
    }
    a = 100;
   return b;
}
 a();
