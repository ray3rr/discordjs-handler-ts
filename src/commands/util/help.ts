import button from "../../interfaces/button"
import Client from "../../libs/client"
import { ActionRowBuilder,  ButtonStyle, CommandInteraction, ComponentType } from "discord.js"


export default {
    name: "help",
    description: "Help command",
    options: [
        {
            name: "test",
            description: "test",
            type: 3,
        }
    ],
    permissions: {
        user: [],
        bot: []
    },
    guildOnly: true,
    execute: (client: Client, interaction: CommandInteraction) => {

        let test = interaction.options.get("test")?.value

         const actionRow : any = new ActionRowBuilder({
         	components: [
         		{
         			custom_id: "test",
         			label: "Click me",
         			style: ButtonStyle.Primary,
         			type: ComponentType.Button,
         		},
            ],
        })


        interaction.reply({
            components: [actionRow],
            content: `${test}`
        })
    }
}