requirejs.config({
    baseUrl: 'scripts/algorithms'
});

require(['sort'], function(sort) {

	sort.age(19);
	sort.name("Matheus");

});