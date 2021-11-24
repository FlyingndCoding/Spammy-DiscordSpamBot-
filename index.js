 //      Spam Bot      \\
// Created By Flyingandcoding \\

// Settings \\

const BotName = "Botname"; // Bot Name \\
const Token = "Token"; // The token for the bot \\
const SpamMessage = "Uh"; // message you want to spam \\
const YourDiscordID = id; // Replace with your discord id! \\

// Bot \\

const Discord = require("discord.js");
const prefix = ";";

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	bot.user.setGame("UwU", "https://twitch.tv/")

	console.log(`${BotName} Loaded!`);

	try {
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);
	} catch(e) {
		console.log(e);
	};
});

bot.on("message", async message => {
	if(message.author.bot) return;

	if(!command.startsWith(prefix)) return;

    if(command === `${prefix}spam`) {
    	if(!message.author.id === YourDiscordID) return;
    	let Ping = message.mentions.users.first();
    	setInterval(function(){
    		Ping.send(SpamMessage)
    	},
    	  NumberofPings
    	);
    };
});

bot.login(Token);
