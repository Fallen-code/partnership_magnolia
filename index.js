require('dotenv').config()
const discord = require('discord.js')
const bot = new discord.Client()
let channels = ''
let PREFIX = '*'
let CREATORE = '699727115263934515'
let timer = 600000

bot.login(process.env.token)

bot.on('ready', () =>{
    console.log('pronto')
})

setInterval(() =>{
    /*if(channels !== '')
    {
       let args = channels.split(' ')
        for(let i=0; i<args.length; i++)
        {
            if(args[i] !== '')
            {
                let canale = bot.channels.cache.get(args[i])
                if(canale)
                {
                    let embed = new discord.MessageEmbed()
                    .setAuthor('Magnolia roleplay | Developer bot: lǝƃuɐ uǝllɐɟ#9672',bot.user.displayAvatarURL())
                    .setColor('FF0000')
                    .setTitle(':point_right:  Entra in Magnolia Roleplay! :point_left:')
                    .setURL('https://discord.gg/XqUwQqp')
                    .setThumbnail('https://tenor.com/view/fairytail-fairy-tail-anime-gif-5010750')
                    .setDescription(`Se sei un fan di Fairy Tail e del sano RP entra in **Magnolia Roleplay**!!
                                    
                                    Cosa Offriamo:
                                    :small_blue_diamond: \`Canali originali di Fairy Tail\`
                                    :small_blue_diamond: \`Possibilità di interpretare un pg canon\`
                                    :small_blue_diamond: \`Storia a capitoli staccata dalla storia di Fairy Tail\`
                                    :small_blue_diamond: \`Alleanze e lotte tra gilde\`
                                    :small_blue_diamond: \`Un sistema di leveling\`
                                    :small_blue_diamond: \`Un sistema di rank per i maghi\`
                                    :small_blue_diamond: \`Staff molto ampio e preparato per coprire ogni esigenza con la massima velocità\`
                                    :small_blue_diamond: \`Eventi intrattenenti e interessanti\`
                                    :small_blue_diamond: \`Un'associazione di Sesso a Sorpresa\`
                                    :small_blue_diamond: \`Un bot personale del server [Work in Progress]\`
                                    :small_blue_diamond: \`Un corso di sviluppo bot completamente gratuito\`
                                    
                                    Per qualsiasi tipo di problema con questo bot o richieste di developing trovate il mio server accanto il server Magnolia Roleplay :relaxed:`)
                    .addFields(
                        { name: 'Magnolia Roleplay', value: 'https://discord.gg/XqUwQqp', inline: true },
                        { name: 'Server di supporto', value: 'Still nothing', inline: true },
                        )
                    .setImage('https://tenor.com/view/fairytail-intro-gif-13002101')
                    .setTimestamp()
                    .setFooter('Cordiali saluti | Staff Magnolia Roleplay', bot.user.displayAvatarURL())
                    canale.send(embed)
                    canale.send('https://discord.gg/XqUwQqp')
                }
                else console.log('errore per il canale '+args[i])
            }
        }
    }*/
}, 2000)

bot.on('message', message =>{
    if(message.author.bot) return;
    if(message.content.toLowerCase().startsWith(PREFIX+'add') && message.author.id === CREATORE)
    {
        let channel = message.mentions.channels.first()
        channels += channel.id+' '
    }

    if(message.content === 'send')
    {
        let args = channels.split(' ')
        for(let i=0; i<args.length; i++)
        {
            if(args[i] !== '')
            {
                let canale = bot.channels.cache.get(args[i])
                if(canale)
                {
                    let embed = new discord.MessageEmbed()
                    .setAuthor('Magnolia roleplay | Developer bot: lǝƃuɐ uǝllɐɟ#9672',bot.user.displayAvatarURL())
                    .setColor('FF0000')
                    .setTitle(':point_right:  Entra in Magnolia Roleplay! :point_left:')
                    .setURL('https://discord.gg/XqUwQqp')
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setDescription(`Se sei un fan di Fairy Tail e del sano RP entra in **Magnolia Roleplay**!!
                                    
                                    Cosa Offriamo:
                                    :small_blue_diamond: \`Canali originali di Fairy Tail\`
                                    :small_blue_diamond: \`Possibilità di interpretare un pg canon\`
                                    :small_blue_diamond: \`Storia a capitoli staccata dalla storia di Fairy Tail\`
                                    :small_blue_diamond: \`Alleanze e lotte tra gilde\`
                                    :small_blue_diamond: \`Un sistema di leveling\`
                                    :small_blue_diamond: \`Un sistema di rank per i maghi\`
                                    :small_blue_diamond: \`Staff molto ampio e preparato per coprire ogni esigenza con la massima velocità\`
                                    :small_blue_diamond: \`Eventi intrattenenti e interessanti\`
                                    :small_blue_diamond: \`Un'associazione di Sesso a Sorpresa\`
                                    :small_blue_diamond: \`Un bot personale del server [Work in Progress]\`
                                    :small_blue_diamond: \`Un corso di sviluppo bot completamente gratuito\`
                                    
                                    Per qualsiasi tipo di problema con questo bot o richieste di developing trovate il mio server accanto il server Magnolia Roleplay :relaxed:`)
                    .addFields(
                        { name: 'Magnolia Roleplay', value: 'https://discord.gg/XqUwQqp', inline: true },
                        { name: 'Server di supporto', value: 'Still nothing', inline: true },
                        )
                    .setImage('https://66.media.tumblr.com/fdc58b082c15c3335b5cb5b56a97aec5/tumblr_nsp67bvXic1t1ygmno1_500.gifv')
                    .setTimestamp()
                    .setFooter('Cordiali saluti | Staff Magnolia Roleplay', bot.user.displayAvatarURL())
                    canale.send(embed)
                    canale.send('https://discord.gg/XqUwQqp')
                }
                else console.log('errore per il canale '+args[i])
            }
        }
    }
})
