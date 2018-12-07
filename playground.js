const fs = require('fs');

// write into writable stream
const ws = fs.createWriteStream('out.txt');
process.stdin.pipe(ws);

// read from readable stream
const rs = fs.createReadStream("out.txt");
rs.pipe(process.stdout);

// duplex stream
process.stdin.pipe(process.stdout);

// read from readable stream and write using writable stream
const rs = fs.createReadStream('input.txt');
const ws = fs.createWriteStream('output.txt');
rs.pipe(ws);


const readStream = fs.createReadStream('log.log');
readStream.setEncoding('utf-8');
var readEventCount = 0;
readStream.on('data', ( chunk ) => {
    console.log(chunk);
    console.log(chunk.length);
    readEventCount++;
});
readStream.on('end', () => {
    console.log('there is nothing to read now');
    console.log(readEventCount);
});
// 2293Kb log.log file size
// 36 number of times event fired 
// 64Kb read at a time (same has been specified in nodejs archieve fs.js as well)


// Non flowing to flowing mode by resume method
const readStream = fs.createReadStream('input.txt'); // non flowing mode
readStream.resume(); // make it flowing, by default readable stream is in non flowing mode
readStream.on('end', () => {
    console.log('there is nothing to read now');
})


// pausing and reusming readable stream 
const readStream = fs.createReadStream('log.log');
readStream.setEncoding('utf-8');
readStream.on('data', ((dataRead) => {
    return (chunk) => {
        dataRead += chunk.length;
        console.log('data= ' + chunk.length);
        console.log('data read= ' + dataRead);
        readStream.pause();
        setTimeout(() => {
            readStream.resume();
        }, 1000); // in millisec
    };})(0)
);
readStream.on('end', () => {
    console.log('nothing left to read');
});
