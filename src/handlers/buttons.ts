import Client from "../libs/client"
import * as fs from "fs"
import command from "../interfaces/command"
import { greenBright, blueBright, redBright } from "chalk"
import readDir from "../libs/readDir"

export default async (client : Client) => {
    readDir(`${process.cwd()}/src/buttons`).filter((f : String) => f.includes(`.ts`)).forEach(async (btn : String)=> {
        const button = require(`${process.cwd()}/src/buttons/${btn}`).default

        client.buttons.set(button.id, button)
    })
    
    console.log(redBright("Successful loaded"), blueBright(`${client.buttons.size}`), redBright("buttons"))
}