/**
* Name: Basic Eleticity Formules
* @author: Matheus Lucca do Carmo (matheuslc)
* @version: 0.1
*/

define(function() {

  return {

    /*
     * Tension Calc
     * V = R.i
     * @param {int} r Resistence
     * @param {int} i Eletric current
     *
     *
     */
    tension: function(r, i) {
      this.r = r;
      this.i = i;

      return r/i;
    }


  }

});
