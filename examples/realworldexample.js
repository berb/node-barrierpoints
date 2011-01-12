var path = require('path');

var Barrier = require(path.join(__dirname, '..', 'lib', 'barrierpoints')).Barrier;

var http = require('http');

var numRequests = 10;

var barrier = new Barrier(numRequests, function() {
	// success callback
	console.log("all done");
}, function() {
	// default abort callback
	console.log("aborted");
});

// Start numRequests in parallel and wait for all repsonses.
for ( var i = 0; i < numRequests; i++) {
	var r = http.createClient(80, 'www.google.com').request('GET', '/', {
		'host' : 'www.google.com'
	});
	r.end();
	r.once('response', function(response) {
		//Response available, signal success
		barrier.submit();
	});
}
