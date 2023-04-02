import axios from "axios"
import { decode } from "js-base64"
import * as fs from "fs"
import { redBright, blueBright } from "chalk"

export default async () => {
    let res = await axios.get("https://api.github.com/repos/ray3rr/discordjs-handler-ts/contents/VERSION",{
        headers: {
            Authorization: "Bearer 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"
        }
    })

    fs.readFile(`${process.cwd()}/VERSION`, "utf-8" , (err, data) => {
        if(Number(decode(res.data.content)) > Number(data)){
            console.warn(redBright("\n\nHandler version is"), blueBright(`outdated.`), redBright("Please update it from"), blueBright("https://github.com/ray3rr/discordjs-handler-ts"))
            process.exit(1)
        }
    })
}