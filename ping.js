const ping = require('ping');
const note = require('node-notifier');



var engine = setInterval(function () {
	ping.sys.probe(process.argv[2], function (pong) {
		if (pong) {

			note.notify('Online!');
			clearInterval(engine);

		}
	})
}, 2000);