require('dotenv').config()
const discord = require('discord.js')
const bot = new discord.Client()
let channels = ''
let PREFIX = '*'
let CREATORE = '699727115263934515'

bot.login(process.env.token)

bot.on('ready', () =>{
    console.log('pronto')
})

setInterval(() =>{
    if(channels !== '')
    {
        let args = channels.split(' ')
        for(let i=0; i<args.length; i++)
        {
            if(args[i] !== '')
            {
                let canale = bot.channels.cache.get(args[i])
                if(canale) canale.send('ciao')
                else console.log('errore per il canale '+args[i])
            }
        }
    }
}, 2000)

bot.on('message', message =>{
    if(message.author.bot) return;
    if(message.content.toLowerCase().startsWith(PREFIX+'add') && message.author.id === CREATORE)
    {
        let channel = message.mentions.channels.first()
        channels += channel.id+' '
    }
})