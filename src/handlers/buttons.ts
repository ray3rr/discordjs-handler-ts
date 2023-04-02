import Client from "../libs/client"
import * as fs from "fs"
import command from "../interfaces/command"
import { greenBright, blueBright, redBright } from "chalk"

export default async (client : Client) => {
    await fs.readdirSync(`${process.cwd()}/src/buttons`).filter(f => !f.includes(`.`)).forEach(async btn=> {
        const button = require(`${process.cwd()}/src/button/${btn}`).default

        client.buttons.set(button.id, button)
    })
    
    console.log(redBright("Successful loaded"), blueBright(`${client.buttons.size}`), redBright("buttons"))
}