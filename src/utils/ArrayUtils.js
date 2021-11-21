export function removeDuplications(arr, arr2) {

    var mergedArray = [...arr2, ...arr];
    var map = new Map(mergedArray.map(o => [o.id, o]));
    var unique = [...map.values()];

    return unique;
}