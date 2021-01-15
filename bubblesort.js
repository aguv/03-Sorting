
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
                    this.swapItems(arr, j, j + 1);
                }
            }
        }
    } else {
        for(let i = 0; i < arr.length - 1; i++) {
            for(let j = 0; j < arr.length - 1 - i; j++) {
                if(arr[j] < arr[j + 1]) {
                    /* [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ]; */
                    this.swapItems(arr, j, j + 1);
                }
            }
        }
    }
    
    return arr;
}

myLib.split = function(array) {
    let firstHalf, secondHalf;

    firstHalf = array.slice(0, Math.floor(array.length/2));
    secondHalf = array.slice(Math.floor(array.length/2), array.length);

    return [firstHalf, secondHalf];
}

myLib.merge = function(arrLeft, arrRight) {
    let arr = [];

    // si uno de los dos arrays esta vacio salimos del loop (los dos tienen el mismo length, o el de la izquierda tiene uno mas);
    while(arrLeft.length > 0 && arrRight.length > 0) {
        // check values
        if(arrLeft[0] < arrRight[0]) {
            arr.push(arrLeft.shift());
        } else {
            arr.push(arrRight.shift());
        }
    }

    // sumar de lengths y comparacion con el length del array

    return [ ...arr, ...arrLeft, ...arrRight ];
}

myLib.mergeSort = function(array) {
    
    ////// MERGESORT TIENE QUE SER RECURSIVA
    if(array.length <= 1) {
        return array;
    }

    array = this.split(array); 

    return this.merge(this.mergeSort(array[0]), this.mergeSort(array[1])); 
}





















