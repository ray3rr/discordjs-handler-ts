import { Interaction } from "discord.js"
import Client from "../libs/client"
import { redBright } from "chalk"

export default {
    name: "interactionCreate",
    execute: (client: Client, interaction: Interaction) => {
        if(!interaction.isButton())
            return

        
        const button = client.buttons.get(interaction.customId)

        if(!button)
            return interaction.reply({
                content: "Something is broken!"
            })

        try {
            button.execute(client, interaction)
        } catch (err) {
            interaction.reply({
                content: "Something broken!"
            })

            console.error(redBright(err))
        }
    }
}