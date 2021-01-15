
let myLib = {}

myLib.swapItems = function (arr, index, index2) {
    [ arr[index], arr[index2] ] = [ arr[index2], arr[index] ];
}
 
myLib.bubbleSort = function (array, string) {
    let arr = [...array]

    if(string === 'asc') {
        for(let i = 0; i < arr.length - 1; i++) {
            for(let j = 0; j < arr.length - 1 - i; j++) {
                if(arr[j] > arr[j + 1]) {
                    /* let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp; */
                    /* [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ]; */
                    myLib.swapItems(arr, j, j + 1);
                }
            }
        }
    } else {
        for(let i = 0; i < arr.length - 1; i++) {
            for(let j = 0; j < arr.length - 1 - i; j++) {
                if(arr[j] < arr[j + 1]) {
                    /* [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ]; */
                    myLib.swapItems(arr, j, j + 1);
                }
            }
        }
    }
    
    return arr;
}

