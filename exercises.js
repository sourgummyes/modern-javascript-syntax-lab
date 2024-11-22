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

const myCar = {...car}

myCar.model = 'q7'

console.log(car, myCar)

console.log("###########")
let propertyName = "username"
const userProfile = {
    [propertyName]: "test",
}
console.log(userProfile)
userProfile.username = "fullname"
console.log(userProfile)

console.log("###########")

function sentence(noun = 'cat',adjective = 'white'){
    console.log(`The ${noun} is ${adjective}`)
}

sentence()
sentence('test','test2')

console.log("###########")


let pizza = 'tasty';

pizza === 'tasty' ? console.log('yum') : console.log('yuck');

pizza = 'test';

pizza === 'tasty' ? console.log('yum') : console.log('yuck');

console.log("###########")

let localLangConfig = 'fr';

let LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);

localLangConfig = null;
LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);

console.log("###########")

let userSavedTheme = null;

let USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME);
userSavedTheme = 'dark';
USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME);

console.log("###########")

const adventurer = {
    name: 'Alice',
  };

  let cat = adventurer.cat?.age

  console.log(cat);
  

  console.log("###########")