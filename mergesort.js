split = function(array) {
    let firstHalf, secondHalf;

    firstHalf = array.slice(0, Math.floor(array.length/2));
    secondHalf = array.slice(Math.floor(array.length/2), array.length);

    return [firstHalf, secondHalf];
}

merge = function(arrLeft, arrRight) {
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

mergeSort = function(array) {
    ////// MERGESORT TIENE QUE SER RECURSIVA
    if(array.length <= 1) {
        return array;
    }

    array = split(array); 

    return merge(mergeSort(array[0]), mergeSort(array[1])); 
}