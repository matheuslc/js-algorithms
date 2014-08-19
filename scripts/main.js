requirejs.config({
    baseUrl: 'scripts/algorithms'
});

require(['basiceletricity'], function(eletricity) {

	console.log(eletricity.tension(10, 5));

});
