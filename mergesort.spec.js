describe('mergesort', function() {
    let array = [5, 2, 6, 10, 3]
    let array2 = [1200, 30, 344, 43, 22, 59, 88, 49, 29, 1040, 40, 5000, 87, 41, 90, 2, -3, -10, 0, 400, 10001, -50, -33, 4, 6050];

    it('la funcion split puede dividir un array en dos', function() {
      // tu código acá 
        let myTest = myLib.split(array);
        expect(Array.isArray(myTest[0])).toEqual(true);
        expect(Array.isArray(myTest[1])).toEqual(true);
    });

    it('la funcion merge sort deberia manejar un array vacio', function() {
        expect(myLib.mergeSort([])).toEqual( [] );
    });

    it('la funcion merge sort recibe un array y lo devuelve ordenado de menor a mayor', function() {
        expect(myLib.mergeSort(array)).toEqual( [2, 3, 5, 6, 10] );
    });

    it('la funcion merge sort recibe un array de 25 numeros y lo devuelve ordenado de menor a mayor', function() {
        expect(myLib.mergeSort(array2)).toEqual( [-50, -33, -10, -3, 0, 2, 4, 22, 29, 30, 40, 41, 43, 49, 59, 87, 88, 90, 344, 400, 1040, 1200, 5000, 6050, 10001] );
    })

  });