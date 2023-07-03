Question:-

Write a function to rotate an array by a given number of steps to the right.

ex:- arr = [1,2,3,4,5];
		step = 2;

 output = [5,4,1,2,3]

// solution 

function rotate(arr, n){
    for(var i=0; i<n; i++){
        var x = arr[arr.length-1];
        arr.pop();
        arr.unshift(x);
    }
    console.log(arr);
}



arr = [1,2,3,4,5,6,7,8,9,10];
rotate(arr,3);


Output:-

VM2224:7 (10) [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]
