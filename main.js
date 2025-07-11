// Fundaments of Javascript
// Arrays and Objects
// Functions returns
// Async is coding
// foreach, map, filter, find, indexOf,

// var arr = [1, "sazzad", true, null, undefined, { name: "sazzad"}, function(){}, [1, 2], 1.5, NaN];
var arr = [1, 2, 3, 4];
var ans = arr.filter(function(val){
    if(val >= 2) {
        return true
    } else {
        return false
    }
})
console.log(ans)
