const discord = require('discord.js')
const intents = discord.Intents.FLAGS

const client = new discord.Client({intents:[intents.GUILDS,intents.GUILD_MESSAGES,intents.GUILD_INVITES,intents.DIRECT_MESSAGES],partials:["CHANNEL"]})
exports.client = client

client.on("ready",() => {
    client.user.setActivity({name:"!help | Offical bot",type:"LISTENING"})
    console.log("De bot is online")
})

//Help menu
client.on("messageCreate",(msg) => {
    if (msg.content =="!help"){
        var Menuembed = new discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("**Help Muenu**")
        .setDescription("**Voor Help Menu**\n`!help`\n\n**Voor een dis**\n`!dis`") //Voeg hier toe wat er in u help menu moet staan bv. ("**Voor Help Menu**\n`!help`")
         msg.channel.send({embeds:[Menuembed]})
     
     }
     })

//
client.on("messageCreate",(msg) => { //              ↓ Naam invullen bij de gekleurde text!
    if (msg.content =="!(bv)"){ //  if (msg.content =="!"){ 
        msg.channel.send({content:"**Kies wat hier moet te staan**"})
        

    }
})

// HIER AFBLIJVEN OF U !dis WERKT NIET MEER
//dis
client.on('messageCreate',(msg) => {
    if (msg.content == "!dis"){
        var randomnumber = Math.floor(Math.random() * 190) - 1 
        var dis = require("./dis.json")[randomnumber]

        msg.channel.send({content:dis})
    }
})


client.login("") // vul hier u token in!