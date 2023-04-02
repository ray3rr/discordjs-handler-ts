import Client from "./src/libs/client"
import { CommandInteraction } from "discord.js"

export default {
    name: "help",
    description: "Help command",
    options: [],
    permissions: {
        user: [],
        bot: []
    },
    guildOnly: true,
    execute: (client: Client, interaction: CommandInteraction) => {
        interaction.reply({
            content: "Hello"
        })
    }
}