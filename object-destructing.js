Object Destructuring

1. console.log(numPlanets); 8
console.log(yearNeptuneDiscovered); 1846

2. console.log(discoveryYears); yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659

3. your name is Alejandro and you like purple
your name is Melissa and you like green
your name is undefined and you like green

Array Destructuring

1. console.log(first); Maya
console.log(second); Marisa
console.log(third); Chi

2. console.log(raindrops); "Raindrops on roses"
console.log(whiskers); "whiskers on kittens",
    console.log(aFewOfMyFavoriteThings);["Bright copper kettles",
        "warm woolen mittens",
        "Brown paper packages tied up with strings"]

3. console.log(numbers); 10, 30, 20

ES2015 Refactoring

1. var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

const { numbers: { a, b } } = object.numbers


2.[arr[0], arr[1]] = [arr[1], arr[0]]


3. const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest })