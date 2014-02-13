var testiData = $.ajax('testinomials.json', {
	dataType: 'json'
});

testiData.done(function (data) {
var testi = Math.round( Math.random() * data.length - 1 );
$('.testi-testimonial').html(data[testi].name);

});
