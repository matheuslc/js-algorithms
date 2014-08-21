/**
* Name: Basic Eleticity Formules
* @author: Matheus Lucca do Carmo (matheuslc)
* @version: 0.1
*/

define(function() {

  return {

    /*
     * Specific Material Resistence Table
     * Note: Specifc resistence in 20º
    */
    specificMaterialResistence: function() {

      return {
        aluminum: 0.0292,
        bronze: 0.067,
        hardCopper: 0.178,
        constantan: 0.5,
        tin: 0.115,
        graphite: 13,
        pureIron: 0.096,
        brass: 0.067,
        manganin: 0.48,
        mercury: 0.96,
        nichrome: 1.1,
        nickel: 0.087,
        gold: 0.024,
        silver: 0.0158,
        platinum: 0.106,
        tungsten: 0.055,
        zinc: 0.056
      }

    },

    /*
     * Tension Calc (ddp)
     * V = R.i
     * @param {int} r Resistence
     * @param {int} i Eletric current
     *
    */
    tension: function(r, i) {

      return (r * i).toFixed(3) + "W";
    },

    /*
     * Resistence Calc
     * R = V/i
     * @param {int} v Tension
     * @param {int} i Eletric current
     *
    */
    resistence: function(v, i) {

      return (v / i).toFixed(3) + " Ohms";
    },

    /*
     * Current Calc
     * I = R/v
     * @param {int} r Resistence
     * @param {int} v Tension
     *
    */
    current: function(v, r) {

      return (r / v).toFixed(3) + " A";
    }


  }

})
