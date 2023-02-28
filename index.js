//utils
const cut = () => {
    console.log("<------");
    console.log(":::::::");
    console.log("------>");}
// :::1:::
//sum of flat array
console.clear();
arr = [1, 1, 1, 1, 1]
console.log("initial array: ", arr)

const sum = arr.reduce((acc, currentValue) => {
return acc + currentValue}, 0);

console.log(":::1::: reduced array: ", sum);
cut();
// :::2:::
// sum of object (key:pairs)
const obj = [{x: 1}, {x:2 }, {x:3}, {x:4}];
console.log("initial object: ", obj)
const sum2 = obj.reduce((acc, currentValue) => {
    return acc + currentValue.x}, 0);

console.log(":::2::: reduced object: ", sum2)
cut()
// :::3:::
// flatten an array of arrays

const flattened = [
[0, 1],
[2, 3],
[4, 5],
].reduce((acc, currentValue) =>
acc.concat(currentValue)
)

console.log(":::3::: reduced and concatenated: ", flattened)
cut()
// :::4::: 
//more steps / used to arrow function
const toFlatten = [[0,1],[2,3],[4,5]]
console.log("toFlatten: ", toFlatten)

const flatArr = toFlatten.reduce((acc, currentValue) => {
    return acc.concat(currentValue)
});
console.log("flatArr: ", flatArr)

const flatArrSum = flatArr.reduce((acc, currentValue) => {
    return acc + currentValue;
}, 0)
console.log(":::4::: sum of flatArr: ", flatArrSum)
cut()
// :::5::: 
// Counting instances of values in an object
const rhacodactylus =  ["ciliatus", "auriculatus", "leachianus", "trachycephalus", "trachyrhynchus", "chahoua", "sarasinorum"]

const countRhacodactylus = rhacodactylus.reduce((arten, art) => {
    const currentCount = arten[art] ?? 0;
    return {
        ...arten,
        [art]: currentCount + 1,
    };
}, {});

console.log(":::5::: bekannte Arten des Genus Rhacodactylus: ", rhacodactylus)

