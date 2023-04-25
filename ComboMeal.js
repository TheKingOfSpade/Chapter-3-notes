const readLine = require(`readline-sync`);
//burger
let answer = readLine.question("Welcome to Rally's. What kind of burger would you like? We have chicken for $5.25, beef for $6.25, or tofu for $5.75.: ");
while (answer != "chicken" && answer != "beef" && answer != "tofu"){
    console.log("Can you repeat that please?:");
    answer = readLine.question("chicken, beef, or tofu?: ");
    return(`${answer}`)

}

//beverage
let answer3 = readLine.question("Would you like a beverage with it?: ");
while (answer3 != "yes" && answer3 != "no"){
    console.log("invalid choice");
    answer3 = readLine.question("Enter y or n: ");
}
let answer4 = readLine.question("What flavor would you like? We have pepsi and water.:");
while (answer4 != "pepsi" && answer4 != "water"){
    console.log("Thats not a flavor. Can you choose another one?");
    answer4 = readLine.question("-----" +
        "Choose pepsi: " +
        "-----");
}
let annswer5 = readLine.question("Would you like fries with that?: ");
while (annswer5 != "yes" && annswer5 != "no" {
    console.log("Can you repeat that please?:");
    annswer5 = readLine.question("small, medium, or large?: ");
    return (`${annswer5}`)
}
