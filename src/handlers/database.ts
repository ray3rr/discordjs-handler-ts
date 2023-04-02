import Client from "../libs/client"
import { connect } from "mongoose"
import { redBright } from "chalk"
import * as fs from "fs"

export default (client: Client) => {
    let uri : any = process.env.URI
    try {
        connect(uri)
    } catch (err) {
        console.error(redBright(err))
    }

    fs.readdirSync(`${process.cwd()}/src/schemas`).forEach((file: string) => {
        let model = require(`${process.cwd()}/src/schemas/${file}`).default

        client.schemas[file.replace(".ts", "")] = model
    })
}