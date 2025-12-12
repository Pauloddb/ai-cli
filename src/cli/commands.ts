import { askCommand } from "../ai/ai.js";
import { Arg } from './args.js';
import { log } from "../utils/logger.js";
import { clearHistory, getHistory } from "../db/history.js";
import { colors, dateMessage } from "../utils/tools.js";



export class Command {
    constructor(public name: string, public description: string, public func: (args: Arg[]) => void) {
        this.name = name;
        this.description = description;
    }

    public async run(args: Arg[]): Promise<void> {
        await this.func(args);
    }
}



const commands: Command[] = [
    new Command('help', 'Exibe a lista de comandos disponíveis.', (args: Arg[]) => {
        log(getCommands().map(cmd => `${cmd.name}: ${cmd.description}`).join('\n\n'), colors.blue);
        console.log('\n');
    }),
    new Command('ask', 'Faz uma pergunta ao assistente com os argumentos passados.', askCommand),
    new Command('exit', 'Encerra o programa.', (args: Arg[]) => process.exit(0)),
    new Command('clear-history', 'Limpa o histórico de perguntas e respostas.', (args: Arg[]) => clearHistory()),
    new Command('show-history', 'Exibe o histórico de perguntas e respostas.', (args: Arg[]) => {
        const history = getHistory();

        log(history.map(message => {
            return `${dateMessage(message.timestamp)}: ${message.role} - ${message.content}`
        }).join('\n\n'), colors.blueBright);
    }),
    new Command('credits', 'Exibe os créditos do programa.', (args: Arg[]) => {
        log(`
Jarvis Assistente de IA
Desenvolvido por Paulo Dias de Barros
Github: https://github.com/Pauloddb
        `, colors.blue);
    })
]





export const getCommands = () => commands;


export const getCommand = (name: string): Command | null => {
    const command = commands.find(c => c.name === name);
    return command ? command : null;
}