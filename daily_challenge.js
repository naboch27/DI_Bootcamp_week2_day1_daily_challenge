//******execice 1******* */

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
console.log(fruits);
fruits.sort();
console.log(fruits)
fruits.push('kiwi')
console.log(fruits)
fruits.splice(0, 1);
console.log(fruits)
fruits.reverse();
console.log(fruits)




/************exercice 2*************/ 

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1]);
