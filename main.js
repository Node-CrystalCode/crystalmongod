require('./funcs/generateId')
const cacheManager = require("./mongod/cache")

module.exports = (mongoUrl, token) => {

    const crystal = require("./src/startService");

    if(!mongoUrl) return console.log('[ CRYSTALMONGOD ] Please provide a mongodb url.')

    console.log(`[ CRYSTALMONGOD ] Initialized..`)
    
    cacheManager(mongoUrl, token)
    console.log(`[ CRYSTALMONGOD ] Initialized..`)
    setTimeout(() => console.log(`[ CRYSTALMONGOD ] Error! DB url is not valid..`), 5000);
  };

