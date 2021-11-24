 //      Spam Bot      \\
// Created By Unlisting \\

// Settings \\

const BotName = "LOL"; // Bot Name \\
const Token = "Njg0OTM2NTA0MTc4Mzc2NzM1.XmBW4w.3HGbKVj-QmF-iIOwJ4H9JLpioZQ"; // The token for the bot \\
const SpamMessage = "LOL"; // message you want to spam \\
const YourDiscordID = 433376107727683590; // Replace with your discord id! \\

// Bot \\

const Discord = require("discord.js");
const prefix = ";";

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	bot.user.setGame("Getting Things Ready", "https://twitch.tv/")

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
    	  92929292929292929298383818
    	);
    };
});

bot.login(Token);