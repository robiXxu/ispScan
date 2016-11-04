var targets = require('./data/ip'),
    ports = require('./data/ports');

module.exports = {

  scan:{
    target: targets,
    port: ports,
    status: 'O',
    banner: false
  },

  file:{
    ips:{
      path: './data/ip',
      cleanAtEnd: false
    },

    ports: './data/ports',

    error: './data/error',

    output: './data/output'

  }

}
