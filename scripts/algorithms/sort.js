/**
* Name: Sort algorithms
* @author: Matheus Lucca do Carmo (matheuslc)
* @version: 0.1
* @module sort
*/

define(function() {

  return {

  /**
   * Insertion sort
   * Not good for big datas
   * @param {array} items A set of items that will be sorted.
  */
  insertion: function(items) {
    var i      = 0,
        j      = 0,
        now    = 0,
        size   = items.length;

    for(i = 0; i < size; i++) {
      j = i - 1;
      now = items[i];

      while(now < items[j] ) {
        items[j+1] = items[j];
        j--;
      }

      items[j+1] = now;

    }

    return items;
  }

}

});
