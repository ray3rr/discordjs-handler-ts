import Client from "../../libs/client"
import { CommandInteraction } from "discord.js"

export default {
    name: "voiceonly",
    description: "voice only command",
    options: [],
    permissions: {
        user: [],
        bot: []
    },
    voiceOnly: true,
    guildOnly: true,
    execute: (client: Client, interaction: CommandInteraction) => {
        interaction.reply({
            content: "no siema"
        })
    }
}