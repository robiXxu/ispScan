var config = require('./config'),
    evilscan = require('evilscan'),
    fs = require('fs');

//====================================================
//  SCAN
//====================================================
var scanner = new evilscan(config.scan);

scanner.on('result', (data) => {
  if(data.status === 'open'){
    var line = 'http://' + data.ip + ':' + data.port + '/' + '\n';
    output(line);
  }
});

scanner.on('error', (err) => {
  error(data);
});

scanner.on('done', () => {
  console.log('Scanning done!');
  clean();
})

scanner.run();

//====================================================
//  HANDLE
//====================================================
var output = function(data){
  if(config.file.output.append){
    fs.appendFile(config.file.output,data);
  }
}

var error = function(data){
  if(config.file.error.append){
    fs.appendFile(config.file.error,data);
  }
}

var clean = function(){
  if(config.file.ips.cleanAtEnd){
    fs.writeFile(
      config.file.ips.path + '.js',
      "module.exports = []"
    );
  }
}
