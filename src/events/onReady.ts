import Client from "../libs/client"
import { redBright, blueBright } from "chalk"

export default {
    name: "ready",
    once: true,
    execute: (client:Client ) => {
        console.log(redBright("Bot started and connected with"), blueBright(`${client.user?.tag}`))
        console.log(redBright("Actually statistics (in cache):"), blueBright(`${client.guilds.cache.size} guilds, ${client.users.cache.size} users`))

        client.application?.commands.set(client.commands.map((c : any) => c)).then(() => {
            console.log(redBright("Successful deployed commands"))
        }).catch(err => {
            console.error(redBright("\n\nAn error occured while deploying commands\n"), blueBright(err))
        })
    }
}