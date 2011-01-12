var path = require('path');

var Barrier = require(path.join(__dirname, '..', 'lib', 'barrierpoints')).Barrier;

var barrier = new Barrier(2, function() {
	console.log("hello world");
});

// submit first party immediately
barrier.submit();

setTimeout(function() {
	// submit second party after 1 sec (will cause submit callback being
	// executed)
	barrier.submit();
}, 1000);
