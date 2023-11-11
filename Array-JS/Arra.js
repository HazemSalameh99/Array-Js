
// 1. Correct the syntax error
/* 
let arr1=[ 1,7 , 9,  45];

let arr2=["Str","alex","moh"];

let arr3=['the','fox', 'over' ,lazy, 'dog'];
*/


// 2. What the index of "Banana","Tomato"
/*var fruits=["Tomato","Banana","Watermelon"];
let indexOfBanana=fruits.indexOf("Banana");
let indexOfTomato=fruits.indexOf("Tomato");
console.log(`the index of Banana ${indexOfBanana}`);
console.log(`the index of Tomato ${indexOfTomato}`);*/


// 3. Create an array represents your:
/*let FavoriteFood=["Shawerma","Bizza","Chicken","Beef","Mansaf"];
let FavoriteSport=["Football","BasketBall","HandBall"];
let FavoriteMovie=["Titank","Onebese","morgan"];
console.log(FavoriteFood);
console.log(FavoriteSport);
console.log(FavoriteMovie);*/

// 4. Create a function called firstOfArray that take an array as a parameter and return the first element in an array
/*function firstOfArray(fOfArray){
return FOArray[0];
}
console.log(firstOfArray([5,2,3]));*/


// 5. Create a function called lastOfArray that take an array as a parameter and return the first element in an array

/*function lastOfArray(lOfArray){
    return lOfArray[lOfArray.length - 1];
}
console.log(lastOfArray(["t","u","g","x"]));
console.log(lastOfArray(["1","3","2","5"]));*/


// 6. Using console make this array to be like this one (push, unshift, shift, pop)

/*var array=[0,5,7,9];
// => [1,3,4,6,8,9,10]

console.log(array);
console.log(array.push(10));
console.log(array.shift());
console.log(array.shift());
console.log(array.shift());
console.log(array.unshift(1,3,4,6,8));
console.log(array);*/


// 7. Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
/*var array2 = [5,9,-7,3.5];
console.log(array2);

console.log(array2.push(10));
console.log(array2);

console.log(array2.unshift(1,2));
console.log(array2);

console.log(array2.shift());
console.log(array2);

console.log(array2.pop());
console.log(array2);*/




// 8. Create a function called middleOfArray
// that take an array as a parameter
// and return the middle element in an array if it is have an odd elemnets
// and return the two middle elemnt in an array if it is have an even elemnets
// Ex: middleOfArray([1,4,5]) => 4
// Ex: middleOfArray(["t","u","g","x"]) =>"u and g"

/*function middleOfArray(array)
{
    if(array.length%2==0)
    {
        return array[array.length/2-1] + " and " + array[array.length/2];
    }
    else {
        let mid=parseInt(array.length/2);
        return array[mid];
    }
}

console.log(middleOfArray([1,4,5]));
console.log(middleOfArray(["t","u","g","x"]));*/


// 9. Using assignment operator (=)
// make the animals array have these animals
// var animals = ['cat', 'ele', 'bird']
// animals; => ['zebra', 'elephant']
// ** hint: animals[0]=something

/*var animals = ['cat', 'ele', 'bird'];
animals[0]='zebra';
animals[1]='elephant';
console.log(animals);
console.log(animals.slice(0,2));

var nums= [1,2,3,8,9];
nums[0]=5;
nums[1]=-22;
nums[2]=3.5;
nums[3]=44;
nums[4]=98;
nums[5]=44;
console.log(nums);*/


// 10. Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index

/*function indexOfArray(arr,index){
    if(index>=0 && index<arr.length)
    {
        return arr[index];
    }
    else{
        return "Index Out Of bounds";
    }

}

var nums=[1,2,3,8,9];
console.log(indexOfArray(nums,3));
console.log(indexOfArray(nums,1));
console.log(indexOfArray(nums,4));
console.log(indexOfArray(nums,5));*/


// 11. Create a function called arrayExceptLast
// that accept an array
// and return the entire array except the last elemnt
// ** hint: search abou the function that will cut the array on MDN

/*function arrayExceptLast(arr){
    return arr.slice(0,-1); 
}

var nums=[1,2,3,8,9];
console.log(arrayExceptLast(nums));
var nums1=[1,2,3,4,5,6];
console.log(arrayExceptLast(nums1));*/


// 12. Create a function called addToEnd
// that accept an array and value
// and return the entire array with add this value to the end of this array

/*function addToEnd(arr,value){
    arr.pop();
    arr.push(value);
    return arr;
}
var nums= [1,2,3,8,9];
console.log(addToEnd(nums,55));
console.log(addToEnd(nums,66));
console.log(addToEnd(nums,77));*/


// 13. Create a function called sumArray
// that accept an array
// and return the summation of all elemnt in this array

/*function sumArray(arr){
    let sum=0;
    // for(let i=0;i<arr.length;i++){
    //     sum+=arr[i];
    // }
    // return sum;

    let i=0;
    while(i<arr.length){
        sum+=arr[i];
        i++
    }
    return sum;
}

var nums= [1,2,3,8,9];
console.log(sumArray(nums));*/


// 14. Create a function called minInArray
// that accept an array
// and return the minimum value inside this array
function minInArray(arr){
    let small=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<small){
            small=arr[i];
        }
    }
    return small;
}

var nums= [9,8,3,2,1];
console.log(minInArray(nums));