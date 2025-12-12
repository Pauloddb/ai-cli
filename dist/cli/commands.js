import { askCommand } from "../ai/ai.js";
import { log } from "../utils/logger.js";
import { clearHistory, getHistory } from "../db/history.js";
import { colors, dateMessage } from "../utils/tools.js";
export class Command {
    name;
    description;
    func;
    constructor(name, description, func) {
        this.name = name;
        this.description = description;
        this.func = func;
        this.name = name;
        this.description = description;
    }
    async run(args) {
        await this.func(args);
    }
}
const commands = [
    new Command('help', 'Exibe a lista de comandos disponíveis.', (args) => {
        log(getCommands().map(cmd => `${cmd.name}: ${cmd.description}`).join('\n\n'), colors.blue);
        console.log('\n');
    }),
    new Command('ask', 'Faz uma pergunta ao assistente com os argumentos passados.', askCommand),
    new Command('exit', 'Encerra o programa.', (args) => process.exit(0)),
    new Command('clear-history', 'Limpa o histórico de perguntas e respostas.', (args) => clearHistory()),
    new Command('show-history', 'Exibe o histórico de perguntas e respostas.', (args) => {
        const history = getHistory();
        log(history.map(message => {
            return `${dateMessage(message.timestamp)}: ${message.role} - ${message.content}`;
        }).join('\n\n'), colors.blueBright);
    })
];
export const getCommands = () => commands;
export const getCommand = (name) => {
    const command = commands.find(c => c.name === name);
    return command ? command : null;
};
//# sourceMappingURL=commands.js.map