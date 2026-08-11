
const arr = [1,2,4,true,'welcome']

//push()- used to add 1 or more elements

console.log(arr.push('Hello','Testleaf'));
console.log(arr);
console.log(arr.push());
console.log(arr);



//pop()- remove 1 element at the end of the array
arr.pop()
console.log(arr);

//unshift()- used to add one or more element in the start of the array

arr.unshift('Testleaf','qeagle',45)
console.log(arr);

//shift - used to remove only one element at the start of the array
arr.shift()
console.log(arr);

//slice() - extract portion of the array
//[ 'qeagle', 1, 2, 4, true, 'welcome', 'Hello' ]
console.log(arr.slice(4));
console.log(arr.slice(4,7));
console.log(arr);

//splice()

/* syntax:
array.splice(startIndex, deleteCount, item1, item2, ...) */
//[ 'qeagle', 45, 1, 2, 4, true, 'welcome', 'Hello' ]
arr.splice(1,2,'undefined','good')
console.log(arr);
arr.splice(2,1)
console.log(arr);
arr.splice(1,1,'welcome',87,'Hello',false)
console.log(arr);

arr.splice(3,1)
console.log(arr);
arr.splice(-1,1)
console.log(arr);









