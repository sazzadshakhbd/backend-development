// Fundaments of Javascript
// Arrays and Objects
// Functions returns
// Async is coding
// foreach, map, filter, find, indexOf,

// var arr = [1, "sazzad", true, null, undefined, { name: "sazzad"}, function(){}, [1, 2], 1.5, NaN];


async function abcd() {
    var blob = await fetch("https://randomuser.me/api/");
    var ans = await blob.json();
    console.log(ans.results[0].name);
}

abcd();