import Client from "../libs/client"
import * as fs from "fs"
import command from "../interfaces/command"
import { greenBright, blueBright, redBright } from "chalk"

export default async (client : Client) => {
    let events: number = 0
    await fs.readdirSync(`${process.cwd()}/src/events`).forEach(e => {
        let event = require(`${process.cwd()}/src/events/${e}`).default

        client[event.once == true ? "once" : "on"](event.name, (...args) => {
            event.execute(client, ...args)
        })

        events++
    })

    console.log(redBright("Successful loaded"), blueBright(`${events}`), redBright("events"))
}