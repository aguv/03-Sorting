describe('Bubble Sort', function(){
    let array = [5, 2, 6, 10, 3]

    beforeEach(function() {
        spyOn(myLib, 'swapItems').and.callThrough(); 
    });

    it('maneja un array vacio', function(){
      expect( myLib.bubbleSort([]) ).toEqual( [] );
    });

    it('ordena el array de menor a mayor', function() {
        expect( myLib.bubbleSort(array, 'asc') ).toEqual( [2, 3, 5, 6, 10] );
    });

    it('ordena el array de mayor a menor', function() {
        expect( myLib.bubbleSort(array, 'des') ).toEqual( [10, 6, 5, 3, 2] );
    });

    it('array 5-2-6-10-3 deberia usar 6 swaps para ordenar de men a may', function() {
        myLib.bubbleSort(array);
        console.log(myLib.swapItems.calls.count())
        expect(myLib.swapItems.calls.count()).toEqual(6);
    });
    
}); 