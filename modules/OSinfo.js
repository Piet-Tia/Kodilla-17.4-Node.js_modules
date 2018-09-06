var os = require('os');
var systemUptime = require('./systemUptime');


function getOSinfo() {
	let type = os.type();
	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}
	const release = os.release();
	const cpu = os.cpus()[0].model;
	const userInfo = os.userInfo();
	console.log('System: ', type);
	console.log('Release: ', release);
	console.log('CPU model: ', cpu);
	systemUptime.print();
	console.log('User name: ', userInfo.username);
	console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;