const cacheManager = require("./mongod/cache")

module.exports = (mongoUrl, token) => {    
    console.log(`[ CRYSTALMONGOD ] Initialized..`)
    if(!mongoUrl) return console.log('[ CRYSTALMONGOD ] Please provide a mongodb url.')
    cacheManager(mongoUrl, token)
    setTimeout(() => console.log(`[ CRYSTALMONGOD ] Error! DB url is not valid..`), 5000);
  };