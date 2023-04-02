import * as discord from "discord.js"
import command from "../interfaces/command"
import event from "../interfaces/event"
import config from "../interfaces/config"
import schema from "../interfaces/schema"

class Client extends discord.Client {
    constructor(options : discord.ClientOptions){
        super(options)
    }

    commands : discord.Collection<String, command> = new discord.Collection<String, command>()

    events : discord.Collection<String, event> = new discord.Collection<String, event>()

    debug: boolean = false

    config: config = require(`${process.cwd()}/config.ts`).default

    schemas: schema = {}
}

export default Client