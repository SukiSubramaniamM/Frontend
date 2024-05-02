var array = [1,2,3,3,4,5,5]
var unique = []
for (let i =0 ; i<array.length;i++){
    if(array[i] !== array[i-1]){
        unique.push(array[i])
    }   
}
console.log(unique)