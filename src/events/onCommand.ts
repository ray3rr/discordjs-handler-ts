import Client from "../libs/client"
import chalk, { redBright, blueBright } from "chalk"
import { Interaction, PermissionsBitField } from "discord.js"

export default {
    name: "interactionCreate",
    execute: (client:Client, interaction: Interaction) => {
        if(!interaction.isCommand())
            return

        const command = client.commands.get(interaction.commandName)
        if(!command)
            return interaction.reply({
                content: "Something broken!"
            })

        if(command.devOnly && !client.config.devs.includes(interaction.user.id))
            return interaction.reply({
                content: "You are not a developer!"
            })

        if(command.guildOnly && !interaction.guildId)
            return interaction.reply({
                content: "You can use this command only in guild!"
            })
        
        if(interaction.guildId){
            let botPerms: any = command.permissions.bot

            if(command.permissions.bot && !interaction.guild?.members.me?.permissions.has(PermissionsBitField.resolve(botPerms)))
                return interaction.reply({
                    content: `I don't have required permissions: \`${command.permissions.bot.join(`, `)}\``
                })

            let userPerms: any = command.permissions.user
            
            if(command.permissions.user && !interaction.guild?.members.cache.get(interaction.user.id)?.permissions.has((PermissionsBitField.resolve(userPerms))))
                return interaction.reply({
                    content: `You don't have required permissions: \`${command.permissions.user.join(`, `)}\``
                })
        }
        
        try {
            command.execute(client, interaction)
        } catch (err) {
            interaction.reply({
                content: "Something broken!"
            })

            console.error(redBright(err))
        }
    }
}