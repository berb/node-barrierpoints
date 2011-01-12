var path = require('path');

var Barrier = require(path.join(__dirname, '..', 'lib', 'barrierpoints')).Barrier;

var barrier = new Barrier(2, function() {
	// success callback
	console.log("hello world");
}, function() {
	// default abort callback
	console.log("aborted");
});

// submit first party immediately
barrier.submit();

setTimeout(function() {
	// abort second party after 1 sec (will execute custom callback when
	// provided)
	barrier.abort(function() {
		console.log("ooops I failed!");
	});
}, 1000);
