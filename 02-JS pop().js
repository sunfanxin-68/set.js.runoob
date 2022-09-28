const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
//pop() 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。
//返回值 从数组中删除的元素（当数组为空时返回undefined）。

console.log(plants.pop());  
// 打印出 "tomato" plant数组中最后一个元素

console.log(plants);
// 打印出plant数组中所有元素 Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();  //调用pop方法

console.log(plants);
//打印出plant数组中删除了最后一个元素的其他所有元素 : Array ["broccoli", "cauliflower", "cabbage"]


// push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows'); //添加一个 count 为在数组末尾添加一个新元素cow
console.log(count);
// 打印出count（animals数组长度 ： 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]