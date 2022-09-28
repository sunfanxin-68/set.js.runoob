//sort() 方法用于对数组的元素进行排序。
//排序顺序可以是字母或数字，并按升序或降序。默认排序顺序为按字母升序。

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);  //排列顺序为 abcde...z顺序
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);   //排列顺序为 123456 注意：当数字是按字母顺序排列时"40"将排在"5"前面。
//使用数字排序，你必须通过一个函数作为参数来调用
// expected output: Array [1, 100000, 21, 30, 4]

//slice() 方法可从已有的数组中返回选定的元素。
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant','fort'];

console.log(animals.slice(2));
// 打印出第三个 camel之后的元素  ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// 打印出第三和第四个元素 ["camel", "duck"]

console.log(animals.slice(1, 5));
// 打印出第二到第五个元素: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// 打印出数组最后两个元素 t: Array ['elephant', 'fort' ]

console.log(animals.slice(2, -1));
// 打印出第三个到倒数第一2个元素 ['camel', 'duck', 'elephant']

console.log(animals.slice());
// expected output: Array ['ant', 'bison', 'camel', 'duck', 'elephant', 'fort']
//slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。