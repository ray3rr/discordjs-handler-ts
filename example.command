import Client from "../../libs/client"
import { CommandInteraction } from "discord.js"

export default {
    name: "",
    description: "",
    options: [],
    permissions: {
        user: [],
        bot: []
    },
    guildOnly: true,
    execute: (client: Client, interaction: CommandInteraction) => {}
}