Question:-

Write a function to find the intersection of two arrays (common elements between the two arrays).

ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

output = [1,4,7]

// solution 

function intersect(arr1, arr2){
    arr3 = [];
    for(var i=0; i< arr1.length; i++){
        for(var j=0; j< arr2.length; j++){
            if(arr1[i] == arr2[j]){
                arr3.push(arr1[i]);
            }
        }
    }
    const set = new Set(arr3);
    arr3 = Array.from(set)
    console.log(arr3);
}


var arr1 = [2,4,1,7,4,2] ; 
var arr2 = [5,1,4,7,3,1];
intersect(arr1,arr2);


Output:-

VM92:12 (3) [4, 1, 7]
