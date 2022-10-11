function flippingBits(n) {
  let arr =n.toString(2).split(''); 
   arr = arr.map(el =>{
     return el==='0'? '1' :'0';
   })
while(arr.length<32){
  arr.unshift('1')
}
  let number = arr.join('')
  return parseInt(number,2)   

}
