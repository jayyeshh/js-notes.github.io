let arr=[1,2,3,4,5,[6,7,8]];
let str="here is the test string";

let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"]

let nums=[1, 2, 3, 4, 5, 7, 8, 9];

let library=[ 
   { author: 'Unknown', title: 'zebra runners', libraryID: 342},
   { author: 'Auron paul', title: 'Zebronics', libraryID: 1328},
   { author: 'Auron paul', title: 'aZehbronics', libraryID: 12328},
   { author: 'Auron paul', title: 'Alehbronics', libraryID: 1228},
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function is_array(arr){
    return toString.call(arr)==="[object Array]";
}

function clone(arr){
    return [...arr];
}

function first(arr,n=0){
   if(!arr.length || n<0) return [];
   return n===0 ? arr[0] : arr.slice(0,n);
}

function last(arr,n=0){
   let len=arr.length;
   if(!len || n<0) return [];
   return n===0 ? arr[len-1] : arr.slice(Math.max(len-n,0));
}

function joinArray(arr){
   return arr.join();
}

function dashes(num){
   //not implemented.
   return true;
}

function swapCase(str){
   var sArr=str.split('');
   return sArr.map(c=> c.toUpperCase()===c ? c.toLowerCase() : c.toUpperCase()).join('');
}

function sumSquare(arr){
   return arr.reduce((acc,curr)=> acc+curr*curr);
}

function sumAndProduct(arr){
   let sum=arr.reduce((acc,curr)=> acc+curr);
   let prod=arr.reduce((acc,curr) => acc*curr);
   return {sum, prod};
}

function displayColors(colors, o){
   for(let i=0;i<colors.length;i++){
      let postFix=i+1<=3 ? o[i+1] : o[0];
      console.log(`${i+1}${postFix} choice is ${colors[i]}`);
   }
}

function shuffleArray(arr){
    let len=arr.length;
    for(let i=0;i<len;i++){
       let index=Math.floor(Math.random()*len);
       let temp=arr[index];
       arr[index]=arr[i];
       arr[i]=temp;
    }
    return arr;
}

function binarySearch(arr,elem,l,h){
   let mid=Math.floor((l+h)/2);
   if(h<l) return "not found!!";
   if(arr[mid]>elem) return binarySearch(arr,elem,l,mid-1);
   else if(arr[mid]<elem) return binarySearch(arr,elem,mid+1,h);
   return mid; 
}

function union(arr1,arr2){
   return [...new Set([...arr1,...arr2])].sort((a,b)=> a-b);
}

function diff(arr1,arr2){
   arr1=arr1.flat(99);
   arr2=arr2.flat(99);
   return arr1.filter(item=> !arr2.includes(item));
}

function interSection(arr1,arr2){
   arr1=arr1.flat(Number.MAX_VALUE);
   arr2=arr2.flat(Number.MAX_VALUE);
   return arr1.filter(item=> arr2.includes(item));
}

function difference(arr1, arr2){
   arr1=arr1.flat(Number.MAX_VALUE);
   arr2=arr2.flat(Number.MAX_VALUE);
   return [...arr1.filter(item=> !arr2.includes(item)), ...arr2.filter(item=> !arr1.includes(item))].sort((a,b)=> a-b);
}

function removeNull(arr){
   return arr.filter(item=> item);
}

function sortByTitle(arr){
   return arr.sort((a,b)=> (''+a.title).localeCompare(b.title));
}


function twoSum(arr,target){
   let db=new Map();
   for(let i in arr){
      let x=db.get(target-arr[i]);
      if(x!==undefined) return [x, i];
      db.set(arr[i], i);
   }
   return "not found!!";
}

function getProperties(objects, property){
    return objects.filter(obj => obj.hasOwnProperty(property)).map(obj=> obj[property]);
}

function longest_common_starting_substr(arr){
    let longestSoFar=arr[0];
    arr.forEach(str=>{
    	let i=0;
	while(i<str.length && str[i]===longestSoFar[i]) i++;
	longestSoFar=longestSoFar.substr(0,i);
    });
    return longestSoFar;
}

function num_string_range(start, end, gap){
    let res=[];
    if(typeof start==="number"){
       if(start<end){
		while(start<=end){
		    res.push(start);
		    start+=gap;
		}
       }else{
	       while(start>=end){
		    res.push(start);
		    start-=gap;
	       }
       }
    }else{
	let curr=start;
	if(start.charCodeAt(0)<end.charCodeAt(0)){
		while(curr.charCodeAt(0)<=end.charCodeAt(0)){
		    res.push(curr);
		    curr=String.fromCharCode(curr.charCodeAt(0)+gap);
		}
	}else{
		while(curr.charCodeAt(0)>=end.charCodeAt(0)){
		    res.push(curr);
		    curr=String.fromCharCode(curr.charCodeAt(0)-gap);
		}
	}
    }
    return res;
}

/*
console.log(is_array(arr));
console.log(is_array(str));
let copy=clone(arr);
copy[0]=1312;
console.log(copy);
console.log(arr);
console.log(first(arr));
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
console.log(joinArray(arr));
console.log(swapCase("The Quick Brown Fox"));
console.log(sumSquare([0,1,2,3,4]));
console.log(sumAndProduct([1, 2, 3, 4, 5, 6]));
displayColors(colors,o);
console.log(shuffleArray(arr));
console.log(binarySearch(nums,9,0,nums.length-1));
console.log(union([1, 2, 3], [100, 2, 1, 10]));
console.log(diff([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(interSection([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(removeNull([NaN, 0, 15, false, -22, '',undefined, 47, null]));
console.log(sortByTitle(library));
console.log(twoSum([10,20,10,40,50,60,70],50));
console.log(getProperties(library, 'author'));
console.log(longest_common_starting_substr(['googling', 'google','googleee']));
console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(0, -5, 1));
*/
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const print = val => console.log(val);

const uniqueValuesArrays = [...new Set(arr1)].map( value =>
arr1.filter( element => element === value)
);

//console.log(uniqueValuesArrays);

const mostFrequent = uniqueValuesArrays.reduce( (biggest, item) => {
return biggest.length > item.length ? biggest : item
});
