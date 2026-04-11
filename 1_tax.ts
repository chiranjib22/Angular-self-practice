function addTax(sallary: number) :number{
  return sallary + (sallary * 0.15);
}

console.log(addTax(100));
//console.log(addTax('100')); // genereated compile time error