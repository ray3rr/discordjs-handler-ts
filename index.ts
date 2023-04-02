import Client from "./src/libs/client"
import * as fs from "fs"
import "dotenv/config"
import { redBright, greenBright, blueBright } from "chalk"
import initialize from "./src/libs/initialize"
import updater from "./src/libs/updater"

console.log(redBright("Handler created and maintained by"), blueBright("rayerr#1234\n"))

fs.readFile(`${process.cwd()}/.env`, (error, data) => {
    if(error){
        console.warn(redBright("Cannot find configuration file, creating new one"))
        fs.writeFile(`${process.cwd()}/.env`, "# DEBUG INFORMATIONS\nDEBUG=0\n\n# BOT ACCOUNT INFORMATIONS\nTOKEN=\n\n# DATABASE INFORMATIONS\nURI=\n\n# GITHUB STAFF\nAPI_TOKEN=", (err) => {
            if(err){
                console.error(redBright("Cannot create configuration file, create it manually"))
            } else {
                console.log(greenBright("Successful created configuration file, open .env file and fill it with informations"))
            }
        })
    } else {
        updater()

        console.log(greenBright("Configuration file loaded"))

        initialize()
    }
})