const readline=require(`readline-sync`)
//1
function nameSwapper(){
 let first = readline.question( "First Name: ");
 let last = readline.question("Last Name: ");
 return(`${last}, ${first}`)
}
console.log(nameSwapper());

//2
 function numGen(){
  let num1 = readline.question( "Number One: ");
  let num2 = readline.question("Number Two: ");
  return(`${num1}${num2}`)
 }
 console.log(numGen()); 

 //3
