// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

const mulNum = nums.map( (num) => {
    return num * 2
})
console.log(mulNum)

console.log("###########")
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTop, secondTop, ThirdTop] = pizzaToppings

console.log(firstTop, secondTop, ThirdTop)

console.log("###########")
const car = {
    make: 'Audi',
    model: 'q5',
  };

const {make, model} = car
console.log(make, model)

console.log("###########")
const controversialPizzaToppings = [...pizzaToppings]
console.log(controversialPizzaToppings)

console.log("###########")
let propertyName = "username"
const userProfile = {
    [propertyName]: "test",
}

console.log("###########")