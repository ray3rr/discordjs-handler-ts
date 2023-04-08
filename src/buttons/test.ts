import { ButtonInteraction } from "discord.js";
import Client from "../libs/client";

export default {
    id: "test",
    execute: (client: Client, interaction : ButtonInteraction) => {
        interaction.reply({
            content: "test"
        })
    }
}