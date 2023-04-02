import Client from "../../libs/client" // COMMENT THIS FOR NO ERRORS
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