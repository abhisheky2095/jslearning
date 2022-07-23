'use strict';

var os = require('os');

console.log("Your PC Name is  :", os.hostname());
console.log("Os Type : ", os.type());
console.log("Os Platform : ", os.platform());
console.log("Os Architecture : ", os.arch());
console.log("OS Release Version : ", os.release());
console.log("System Uptime : ", os.uptime());
console.log("System Load Average : ", os.loadavg());
console.log("System Total Memory : ", formatBytes(os.totalmem()));
console.log("System Free Memory : ",formatBytes(os.freemem()));
const cpuCount = os.cpus().length
console.log("System Total Cpu : ", cpuCount)

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024; 
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

