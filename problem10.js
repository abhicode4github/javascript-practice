21. Write a function to remove a specific element from an array.

	arr = [1,2,3,4,5];
	remove = 3

	output :- [1,2,4,5]

// solution

function rem(){
    var el=prompt("enter the elements");
    el2=el.split("");
    var el1=prompt("enter element to remove");
    var filt=el2.filter(el2=>el2!=el1);
    console.log(filt);
}
rem();

