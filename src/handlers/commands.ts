import Client from "../libs/client"
import * as fs from "fs"
import command from "../interfaces/command"
import { greenBright, blueBright, redBright } from "chalk"
import readDir from "../libs/readDir"

export default async (client : Client) => {
    readDir(`${process.cwd()}/src/commands`).filter((f : String) => !f.includes(`.`)).forEach(async (directory : String) => {
        readDir(`${process.cwd()}/src/commands/${directory}`).filter((f : String) => f.endsWith(`.ts`)).forEach((cmd : String) => {
            let command : command = require(`${process.cwd()}/src/commands/${directory}/${cmd}`).default

            command.type = 1

            client.commands.set(command.name, command)
        })
    })


    console.log(redBright("Successful loaded"), blueBright(`${client.commands.size}`), redBright("commands"))
}