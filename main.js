require('./funcs/generateId')

module.exports = (mongoUrl, token) => {

    const crystalrun = require("./src/startService");
    if(!mongoUrl) return console.log('[ CRYSTALMONGOD ] Please provide a mongodb url.')
    crystalrun(mongoUrl, token)
  };

