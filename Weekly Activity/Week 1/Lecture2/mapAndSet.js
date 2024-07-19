let map = new Map();
map.set(1, "Rashi");
map.set(2, "Singh");
console.log(map);
map.values();

//set
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log("On adding: ", set);
set.delete(2);
console.log("On Deleting: ", set);
let arr = [...set, 5, 4]
console.log(set);
