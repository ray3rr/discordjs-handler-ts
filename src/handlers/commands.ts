import Client from "../libs/client"
import * as fs from "fs"
import command from "../interfaces/command"
import { greenBright, blueBright, redBright } from "chalk"

export default async (client : Client) => {
    await fs.readdirSync(`${process.cwd()}/src/commands`).filter(f => !f.includes(`.`)).forEach(async directory => {
        await fs.readdirSync(`${process.cwd()}/src/commands/${directory}`).filter(f => f.endsWith(`.ts`)).forEach(cmd => {
            let command : command = require(`${process.cwd()}/src/commands/${directory}/${cmd}`).default

            command.type = 1

            client.commands.set(cmd.replace(".ts", ""), command)
        })
    })

    // console.log(greenBright("Successful loaded "), blueBright(`${client.commands.size} `), greenBright("commands!"))
    console.log(redBright("Successful loaded"), blueBright(`${client.commands.size}`), redBright("commands"))
}