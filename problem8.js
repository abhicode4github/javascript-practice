19. Write a function to find the sum of all elements in an array.
ex:- arr = [1,2,3,4,5];

// solution

function sum(){
    var arr= [1,2,3,4,5];
    var add=0;
    for(var i=0;i<arr.length;i++)
        {
            add=add+arr[i];
        }
    console.log(add);
}
sum();
