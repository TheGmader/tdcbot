const Discord = require('discord.js');
const client = new Discord.Client()

var prefix = ("!")

client.on('ready', function() {
    client.user.setActivity("Tour de Controle - !help");
    console.log("Connecté - Pret à vous servir");
});

client.login(process.env.TOKEN);

client.on('message', message => {
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.
        if (message.content === prefix + "examtheo"){
            if (message.channel.name !== "demande-exam-théorique-📴"){
                message.reply("Merci d'aller dans le salon `demande-exam-théorique-📴`")
            }else{
                var embed = new Discord.RichEmbed()
                    .setTitle("Les Examens Théorique")
                    .setDescription("**Pour pouvoir avoir une licence et pouvoir piloter un avion il vous faut passer un examen théorique et pratique ! \n Les différents examens théorique : \n - BB Théorique : Pour le passer taper dans <#478624348815491072> : !bbexamtheo (Vous pouvez le recommencez autant de fois que vous souhaitez toutes les semaines) \n - PPL Théorique : Pour le passer taper dans #demande-exam-théorique : !pplexamtheo (Vous pouvez le recommencez autant de fois que vous souhaitez toutes les 2 semaines) \n - ATPL Théorique : Pour le passer taper dans #demande-exam-théorique : !atplexamtheo (Vous pouvez le passer tous les mois et au bout de 5 mois, tous les 2 mois !)**")
                    .setThumbnail("https://image.noelshack.com/fichiers/2018/33/1/1534183656-icons8-avion-hublot-ouvert-100-1.png")
                    .setColor("0x2E64FE")
                message.channel.send(embed);
            }
        }
        if (message.content === prefix + "exampra"){  
            if (message.channel.name !== "demande-exam-pratique-❗"){
                message.reply("Merci d'aller dans le salon `demande-exam-pratique-❗`")   
            }else{   
            var embed = new Discord.RichEmbed()
                .setTitle("Les Examens Pratique")
                .setDescription("**Pour pouvoir avoir une licence et pouvoir piloter un avion il vous faut passer un examen théorique et pratique ! \n Les différents examens pratiques : \n - BB Pratique : Pour le passer taper dans #demande-exam-pratique : !bbexampra (il vous faut l'exam théorique pour pouvoir passer le pratique) \n - PPL Pratique : Pour le passer taper dans #demande-exam-pratique : !pplexampra (Il vous faut l'exam théorique pour pouvoir passer l'exam pratique) \n - CPL Théorique : Pour le passer taper dans #demande-exam-pratique : !cplexampra (Il vous faut l'exam théorique de l'ATPL pour le passer)**")
                .setThumbnail("https://image.noelshack.com/fichiers/2018/33/1/1534183656-icons8-avion-hublot-ouvert-100-1.png")
                .setColor("0x2E64FE")
            message.channel.send(embed);
            }
        }
        if (message.content === prefix + "bbexamtheo"){
            var person = message.author.username
            client.users.get("281118889084059649").send(`<@`+ message.author.id +`> souhaite passer un examen théorique du brevet de base :wink:`)
            message.channel.send("Un message a été envoyé a un examinateur ! Il vous contactera au plus vite :wink:")
        }
        if (message.content === prefix + "pplexamtheo"){
            var person = message.author.username
            client.users.get("281118889084059649").send(`<@`+ message.author.id +`> souhaite passer un examen théorique du PPL :wink:`)
            message.channel.send("Un message a été envoyé a un examinateur ! Il vous contactera au plus vite :wink:")
        }
        if (message.content === prefix + "atplexamtheo"){
            var person = message.author.username
            client.users.get("281118889084059649").send(`<@`+ message.author.id +`> souhaite passer un examen théorique du ATPL :wink:`)
            message.channel.send("Un message a été envoyé a un examinateur ! Il vous contactera au plus vite :wink:")
        }
        if (message.content === prefix + "bbexampra"){
            var person = message.author.username
            client.users.get("281118889084059649").send(`<@`+ message.author.id +`> souhaite passer un examen pratique du BB :wink:`)
            message.channel.send("Un message a été envoyé a un examinateur ! Il vous contactera au plus vite :wink:")
        }
        if (message.content === prefix + "pplexampra"){
            var person = message.author.username
            client.users.get("281118889084059649").send(`<@`+ message.author.id +`> souhaite passer un examen pratique du PPL :wink:`)
            message.channel.send("Un message a été envoyé a un examinateur ! Il vous contactera au plus vite :wink:")
        }
        if (message.content === prefix + "cplexampra"){
            var person = message.author.username
            client.users.get("281118889084059649").send(`<@`+ message.author.id +`> souhaite passer un examen pratique du CPL :wink:`)
            message.channel.send("Un message a été envoyé a un examinateur ! Il vous contactera au plus vite :wink:")
        }
        if (msg.startsWith(prefix + 'PURGE')){
            async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "PDG 💎")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('Vous devez être \`PDG 💎\` pour pouvoir utiliser cette commande.'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Veuillez dire combiend de messages voulez vous supprimer \nUtilisation : ' + prefix + 'purge <nombre>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Erreur : ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }
})
client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "arrivée-🌕").send(`Bienvenue ${member}`)

})

client.on('guildMemberRemove', member =>{
    member.guild.channels.find("name", "departs-🌑").send(`${member} vient de partir`)
})

client.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Nouvel Adhérant 🔍');
    member.addRole(role)
})
