import { CommandInteractionOption } from "discord.js"

interface permissions {
    user: Array<String>,
    bot: Array<String>
}

export default interface command {
    name: String,
    description: String,
    type: number,
    options: Array<CommandInteractionOption>,
    permissions: permissions,
    devOnly: Boolean,
    guildOnly: Boolean,
    execute: Function 
}