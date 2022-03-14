const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./auth.json');
const prefix = config.Prefix;

client.login(config.Token);

/* Copiar Mensaje */
client.on('message', async message => {
    var args = message.content.slice(prefix.length).split(/ +/g);
    var command = args.shift().toLowerCase();
    if(command == "say"){
        
        if(!args[0]) return message.channel.send('Ficali un msg darrere puta. `$say <mensatje>`');
        message.channel.send(args.join(" "));
    }
});
