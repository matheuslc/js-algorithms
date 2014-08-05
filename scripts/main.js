requirejs.config({
    baseUrl: 'scripts/algorithms'
});

require(['sort'], function(sort) {

	console.log(sort.insertion([9,3,2,4,6,8,7,1,5]));


});