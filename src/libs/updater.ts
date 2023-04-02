import axios from "axios"
import { decode } from "js-base64"
import * as fs from "fs"
import { redBright, blueBright, greenBright } from "chalk"

export default async () => {

    if(!process.env.API_TOKEN)
        return console.warn(redBright("Cannot check version, please add github token"))



    let res = await axios.get("https://api.github.com/repos/ray3rr/discordjs-handler-ts/contents/VERSION",{
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    })

    fs.readFile(`${process.cwd()}/VERSION`, "utf-8" , (err, data) => {
        if(Number(decode(res.data.content)) > Number(data)){
            console.warn(redBright("\n\nHandler version is"), blueBright(`outdated.`), redBright("Please update it from"), blueBright("https://github.com/ray3rr/discordjs-handler-ts"))
            process.exit(1)
        } else {
            console.log(greenBright("Handler version is ok!"))
        }
    })
}