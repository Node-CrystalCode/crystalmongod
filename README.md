![Banner](https://user-images.githubusercontent.com/86841352/124293799-b16cb680-db5f-11eb-878e-2be8b3d85659.png)

## About 
CrystalMongod is a Node.js client for MongoDB, based on Mongoose.
This client shows itself best in bot development, because it has a lot of built-in features for Discord.js/Eris development.
A few of them are:
Writing to the database at any event,
Remove/update from the database at any event,
Built-in economy module for Discord.js
And a lot more!

# Getting started
```shell
mkdir myapp
cd myapp
git clone https://github.com/Node-CrystalCode/crystalmongod.git  (download library)
cd crystalmongod-main
npm i
```

## In code:
```shell
const crystal = require("./crystalmongod-main/main.js");
const data = {
  mongoUrl: "MONGO_DB_URL",
  discordBotToken: "DISCORD_BOT_TOKEN" // Optional
}
const client = crystal.init(data)
```

## If you using lib for Discord Bots:
```shell
const crystal = require("./crystalmongod-main/main.js");
const data = {
  mongoUrl: "MONGO_DB_URL"
}
const client = crystal.init(data)
const DiscordClient = client.initDiscord({
  discordBotToken: "DISCORD_BOT_TOKEN"
})

```

