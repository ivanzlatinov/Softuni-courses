function solve(arr){
arr.sort(twoCriteriaSort);
console.log(arr.join('\n'));

function twoCriteriaSort(curr,nxt){

    if(curr.length === nxt.length){
        return curr.localeCompare(nxt);
    }
    return curr.length - nxt.length
}
}
solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

)