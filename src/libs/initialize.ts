import Client from "./client"
import { IntentsBitField, Partials, AllowedMentionsTypes, MessageMentions } from "discord.js"
import { redBright, greenBright } from "chalk"
import * as fs from "fs"

export default () => {
    const client = new Client({
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildVoiceStates,
            IntentsBitField.Flags.DirectMessages,
            IntentsBitField.Flags.MessageContent,
            IntentsBitField.Flags.GuildMembers
        ],
        partials: [
            Partials.Channel,
            Partials.GuildMember,
            Partials.GuildScheduledEvent,
            Partials.Message,
            Partials.Reaction,
            Partials.ThreadMember,
            Partials.User
        ]
    })
    
    client.debug = process.env.DEBUG?.toString() == "1" ? true : false
    
    fs.readdirSync(`${process.cwd()}/src/handlers/`).filter(f => f.endsWith(".ts")).forEach(f => {
        if(client.debug){
            console.log(`Loaded ${f}`)
        }
        require(`${process.cwd()}/src/handlers/${f}`).default(client)
    })
    
    if(!process.env.TOKEN){
        console.error(redBright("Cannot find token in configuration... exiting"))
        process.exit(1)
    }
    
    client.login(process.env.TOKEN).catch(err => {
        console.error(redBright("Error detected in client.login. Exiting"))
        console.error(err)
        process.exit(1)
    })
}