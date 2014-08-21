requirejs.config({
    baseUrl: '../scripts/algorithms'
});

require(['basiceletricity'], function(eletricity) {

  console.log(eletricity.current(5000, 60));

});
